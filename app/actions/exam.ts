"use server"

import { auth } from "@/lib/auth"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
// import { Question } from "@prisma/client"

export async function submitExam(examId: string, answers: Record<string, number>, timeTaken: number) {
    console.log("Submitting exam for student:", examId, answers, timeTaken)
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    // Fetch exam questions
    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        include: { questions: true }
    })
    console.log("Submitting exam 2:", exam)


    if (!exam) return { error: "Exam not found" }

    // Calculate score
    let score = 0

    // Verify answers
    exam.questions.forEach((q: any) => {
        const userAnswer = answers[q.id]
        if (userAnswer !== undefined && userAnswer === q.correctAnswerIndex) {
            score++
        }
    })

    // Save result
    try {
        console.log("Saving result to DB...")
        const newResult = await prisma.result.create({
            data: {
                examId,
                studentId: session.user.id,
                score,
                completionTime: timeTaken,
                responses: answers as any,
                teacherApproval: true,
                adminApproval: true,
            }
        })
        console.log("Result saved successfully:", newResult.id)
    } catch (error: any) {
        console.error("Failed to save result:", error)
        return { error: `Failed to save result: ${error.message}` }
    }

    revalidatePath("/dashboard")
    revalidatePath("/student")
    revalidatePath(`/student/results/${examId}`)
    return { success: true }
}

export async function createExam(data: {
    title: string,
    description: string,
    timeLimit: number,
    questions: { text: string, options: string[], correctAnswerIndex: number }[]
}) {
    const session = await auth()
    if (!session?.user?.id || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
        return { error: "Unauthorized" }
    }

    try {
        console.log("Creating exam for teacher:", session.user.id)
        console.log("Exam Data:", JSON.stringify(data, null, 2))

        const result = await prisma.exam.create({
            data: {
                title: data.title,
                description: data.description,
                timeLimit: data.timeLimit,
                teacherId: session.user.id,
                questions: {
                    create: data.questions.map(q => ({
                        text: q.text,
                        options: JSON.stringify(q.options),
                        correctAnswerIndex: q.correctAnswerIndex
                    }))
                }
            }
        })
    } catch (error: any) {
        console.error("Failed to create exam:", error)
        return { error: error.message || "Failed to create exam" }
    }

    revalidatePath("/teacher")
    revalidatePath("/admin")
    return { success: true }
}

export async function getExams() {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    try {
        const query: any = {
            orderBy: { createdAt: 'desc' },
            include: {
                _count: { select: { results: true } },
                teacher: { select: { name: true } }
            }
        }

        // If not admin, logic depends on role
        if (session.user.role === "TEACHER") {
            query.where = { teacherId: session.user.id }
        } else if (session.user.role === "STUDENT") {
            // Only show assigned exams
            query.where = {
                assignments: {
                    some: {
                        studentId: session.user.id
                    }
                }
            }
        }

        const exams = await prisma.exam.findMany(query)
        return { exams }
    } catch (error) {
        console.error("Failed to fetch exams:", error)
        return { error: "Failed to fetch exams" }
    }
}

export async function getAllStudents() {
    const session = await auth()
    if (!session?.user?.id || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
        return { error: "Unauthorized" }
    }

    try {
        const students = await prisma.user.findMany({
            where: { role: "STUDENT" },
            select: { id: true, name: true, email: true }
        })
        return { students }
    } catch (error) {
        return { error: "Failed to fetch students" }
    }
}

export async function assignExamToStudents(examId: string, studentIds: string[]) {
    const session = await auth()
    if (!session?.user?.id || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
        return { error: "Unauthorized" }
    }

    try {
        // We need to manage the assignments.
        // Strategy: First delete all existing assignments for this exam that are NOT in the new list?
        // OR just upsert?
        // The modal likely sends the FULL list of selected students.
        // So we should sync.

        // 1. Get current assignments
        const currentAssignments = await prisma.examAssignment.findMany({
            where: { examId },
            select: { studentId: true }
        })
        const currentIds = currentAssignments.map(a => a.studentId)

        // 2. Determine to add and remove
        const toAdd = studentIds.filter(id => !currentIds.includes(id))
        const toRemove = currentIds.filter(id => !studentIds.includes(id))

        // 3. Execute
        if (toRemove.length > 0) {
            await prisma.examAssignment.deleteMany({
                where: {
                    examId,
                    studentId: { in: toRemove }
                }
            })
        }

        if (toAdd.length > 0) {
            await prisma.examAssignment.createMany({
                data: toAdd.map(studentId => ({
                    examId,
                    studentId
                }))
            })
        }

        revalidatePath("/teacher")
        return { success: true }
    } catch (error) {
        console.error("Assign error", error)
        return { error: "Failed to assign students" }
    }
}

export async function getExamAssignments(examId: string) {
    const session = await auth()
    if (!session?.user?.id) return { error: "Unauthorized" }

    try {
        const assignments = await prisma.examAssignment.findMany({
            where: { examId },
            select: { studentId: true }
        })
        return { assignedIds: assignments.map(a => a.studentId) }
    } catch (error) {
        return { error: "Failed to fetch assignments" }
    }
}

export async function deleteExam(examId: string) {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    try {
        const exam = await prisma.exam.findUnique({
            where: { id: examId }
        })

        if (!exam) return { error: "Exam not found" }

        // Only allow owner or admin to delete
        if (exam.teacherId !== session.user.id && session.user.role !== "ADMIN") {
            return { error: "Unauthorized" }
        }

        await prisma.exam.delete({
            where: { id: examId }
        })

        revalidatePath("/teacher")
        revalidatePath("/admin")
        return { success: "Exam deleted successfully" }
    } catch (error) {
        console.error("Failed to delete exam:", error)
        return { error: "Failed to delete exam" }
    }
}

export async function bulkUploadQuestions(csvData: string) {
    // Basic CSV parser for "Question,Option1,Option2,Option3,Option4,CorrectIndex(0-3)"
    try {
        const lines = csvData.split('\n').filter(line => line.trim().length > 0)
        const questions = lines.slice(1).map(line => {
            const [text, o1, o2, o3, o4, correct] = line.split(',').map(s => s.trim())
            return {
                text,
                options: [o1, o2, o3, o4],
                correctAnswerIndex: parseInt(correct) || 0
            }
        })
        return { questions }
    } catch (error) {
        return { error: "Failed to parse CSV file" }
    }
}

export async function updateExam(examId: string, data: {
    title: string,
    description: string,
    timeLimit: number,
    questions: { id?: string, text: string, options: string[], correctAnswerIndex: number }[]
}) {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    try {
        const exam = await prisma.exam.findUnique({
            where: { id: examId },
            include: { questions: true }
        })

        if (!exam) return { error: "Exam not found" }
        if (exam.teacherId !== session.user.id && session.user.role !== "ADMIN") return { error: "Unauthorized" }

        // 1. Update Exam Details
        await prisma.exam.update({
            where: { id: examId },
            data: {
                title: data.title,
                description: data.description,
                timeLimit: data.timeLimit,
            }
        })

        // 2. Handle Questions Sync
        const currentQuestionIds = exam.questions.map(q => q.id)
        const incomingQuestionIds = data.questions.filter(q => q.id).map(q => q.id as string)

        // Delete removed questions
        const questionsToDelete = currentQuestionIds.filter(id => !incomingQuestionIds.includes(id))
        if (questionsToDelete.length > 0) {
            await prisma.question.deleteMany({
                where: { id: { in: questionsToDelete } }
            })
        }

        // Upsert (Update existing or Create new)
        for (const q of data.questions) {
            if (q.id && currentQuestionIds.includes(q.id)) {
                // Update
                await prisma.question.update({
                    where: { id: q.id },
                    data: {
                        text: q.text,
                        options: JSON.stringify(q.options),
                        correctAnswerIndex: q.correctAnswerIndex
                    }
                })
            } else {
                // Create
                await prisma.question.create({
                    data: {
                        examId: examId,
                        text: q.text,
                        options: JSON.stringify(q.options),
                        correctAnswerIndex: q.correctAnswerIndex
                    }
                })
            }
        }

        revalidatePath("/teacher")
        revalidatePath(`/teacher/exam/${examId}`)
        return { success: true }

    } catch (error: any) {
        console.error("Failed to update exam:", error)
        return { error: error.message || "Failed to update exam" }
    }
}

export async function approveResult(resultId: string) {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    const result = await prisma.result.findUnique({
        where: { id: resultId },
        include: { exam: true }
    })

    if (!result) return { error: "Result not found" }

    if (session.user.role === "TEACHER") {
        // Verify the teacher owns the exam
        if (result.exam.teacherId !== session.user.id) {
            return { error: "Unauthorized" }
        }
        await prisma.result.update({
            where: { id: resultId },
            data: { teacherApproval: true }
        })
    } else if (session.user.role === "ADMIN") {
        await prisma.result.update({
            where: { id: resultId },
            data: { adminApproval: true }
        })
    } else {
        return { error: "Unauthorized" }
    }

    revalidatePath("/admin")
    return { success: true }
}

export async function getStudentCertificates() {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    try {
        const results = await prisma.result.findMany({
            where: {
                studentId: session.user.id,
            },
            include: {
                exam: {
                    select: {
                        title: true,
                        _count: { select: { questions: true } }
                    }
                },
                student: {
                    select: { name: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        })

        return { certificates: results }
    } catch (error) {
        console.error("Failed to fetch certificates:", error)
        return { error: "Failed to fetch certificates" }
    }
}
