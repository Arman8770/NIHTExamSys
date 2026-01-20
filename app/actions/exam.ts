"use server"
// Using new Prisma Client path: generated/prisma-client

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

    // Calculate CGPA for auto-approval
    const totalQuestions = exam.questions.length
    const cgpa = totalQuestions > 0 ? (score / totalQuestions) * 10 : 0
    const isApproved = cgpa >= 5

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
                teacherApproval: isApproved,
                adminApproval: isApproved,
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
                _count: { select: { results: true, questions: true } },
                teacher: { select: { name: true } }
            }
        }

        // If not admin, logic depends on role
        if (session.user.role === "TEACHER") {
            // Show owned exams OR assigned exams
            query.where = {
                OR: [
                    { teacherId: session.user.id },
                    {
                        assignments: {
                            some: {
                                studentId: session.user.id
                            }
                        }
                    }
                ]
            }
        } else if (session.user.role === "STUDENT") {
            // Only show assigned exams (Individual OR via Batch)
            query.where = {
                OR: [
                    {
                        assignments: {
                            some: {
                                studentId: session.user.id
                            }
                        }
                    },
                    {
                        batches: {
                            some: {
                                students: {
                                    some: {
                                        id: session.user.id
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }

        const exams = await prisma.exam?.findMany(query)
        return { exams }
    } catch (error) {
        console.error("Failed to fetch exams (verified client):", error)
        return { error: "Failed to fetch exams" }
    }
}

export async function getAllAssignmentUsers() {
    const session = await auth()
    if (!session?.user?.id || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
        return { error: "Unauthorized" }
    }

    try {
        const users = await prisma.user.findMany({
            where: {
                role: { in: ["STUDENT", "TEACHER"] },
                NOT: { id: session.user.id } // Don't assign to self
            },
            select: { id: true, name: true, email: true, role: true }
        })
        return { users }
    } catch (error) {
        return { error: "Failed to fetch users" }
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
        const batchAssignments = await prisma.batch.findMany({
            where: { exams: { some: { id: examId } } },
            select: { id: true }
        })
        return {
            assignedIds: assignments.map(a => a.studentId),
            assignedBatchIds: batchAssignments.map(b => b.id)
        }
    } catch (error) {
        return { error: "Failed to fetch assignments" }
    }
}

export async function assignExamToBatches(examId: string, batchIds: string[]) {
    const session = await auth()
    if (!session?.user?.id || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
        return { error: "Unauthorized" }
    }

    try {
        await prisma.exam.update({
            where: { id: examId },
            data: {
                batches: {
                    set: batchIds.map(id => ({ id }))
                }
            }
        })
        revalidatePath("/teacher")
        return { success: true }
    } catch (error) {
        return { error: "Failed to assign batches" }
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
    try {
        const lines = csvData.split('\n').filter(line => line.trim().length > 0)
        const questions = lines.slice(1).map(line => {
            // Simple comma split (still limited, but improved)
            const parts = line.split(',').map(s => s.trim())
            if (parts.length < 6) return null

            const [text, o1, o2, o3, o4, correctVal] = parts
            const options = [o1, o2, o3, o4]

            let correctIndex = 0
            const letterMap: Record<string, number> = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 }

            if (letterMap.hasOwnProperty(correctVal)) {
                correctIndex = letterMap[correctVal]
            } else {
                const parsedNum = parseInt(correctVal)
                if (!isNaN(parsedNum)) {
                    if (parsedNum >= 1 && parsedNum <= 4) correctIndex = parsedNum - 1
                    else if (parsedNum >= 0 && parsedNum <= 3) correctIndex = parsedNum
                } else {
                    const foundIndex = options.findIndex(opt => opt.toLowerCase() === correctVal.toLowerCase())
                    if (foundIndex !== -1) correctIndex = foundIndex
                }
            }

            return {
                text,
                options,
                correctAnswerIndex: correctIndex
            }
        }).filter(q => q !== null)

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

        const certificates = results.filter(r => {
            const totalQuestions = r.exam._count.questions || 0
            const cgpa = totalQuestions > 0 ? (r.score / totalQuestions) * 10 : 0
            // Approval is no longer required
            return cgpa >= 5
        })

        return { certificates }
    } catch (error) {
        console.error("Failed to fetch certificates:", error)
        return { error: "Failed to fetch certificates" }
    }
}

export async function getAllCertificates(filters?: {
    search?: string,
    startDate?: string,
    endDate?: string
}) {
    const session = await auth()
    if (!session?.user?.id || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
        return { error: "Unauthorized" }
    }

    try {
        const where: any = {}

        if (filters?.search) {
            const searchConditions: any[] = [
                { name: { contains: filters.search } },
                { email: { contains: filters.search } }
            ]

            // Handle phone number search if input is numeric
            if (/^\d+$/.test(filters.search)) {
                try {
                    const phoneVal = BigInt(filters.search)
                    searchConditions.push({ phoneNumber: { equals: phoneVal } })
                } catch (e) {
                    // Ignore parse errors
                }
            }

            where.student = {
                OR: searchConditions
            }
        }

        if (filters?.startDate || filters?.endDate) {
            where.createdAt = {}
            if (filters.startDate) {
                const start = new Date(filters.startDate)
                start.setHours(0, 0, 0, 0)
                where.createdAt.gte = start
            }
            if (filters.endDate) {
                const end = new Date(filters.endDate)
                end.setHours(23, 59, 59, 999)
                where.createdAt.lte = end
            }
        }

        const results = await prisma.result.findMany({
            where,
            include: {
                exam: {
                    select: {
                        title: true,
                        _count: { select: { questions: true } }
                    }
                },
                student: {
                    select: { name: true, email: true, phoneNumber: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        })

        const certificates = results.filter(r => {
            const totalQuestions = r.exam._count.questions || 0
            const cgpa = totalQuestions > 0 ? (r.score / totalQuestions) * 10 : 0
            return cgpa >= 5
        })

        return { certificates }
    } catch (error) {
        console.error("Failed to fetch all certificates:", error)
        return { error: "Failed to fetch all certificates" }
    }
}
