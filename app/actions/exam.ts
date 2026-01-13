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

        // If not admin, only show teacher's own exams
        if (session.user.role !== "ADMIN") {
            query.where = { teacherId: session.user.id }
        }

        const exams = await prisma.exam.findMany(query)
        return { exams }
    } catch (error) {
        console.error("Failed to fetch exams:", error)
        return { error: "Failed to fetch exams" }
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

    revalidatePath("/dashboard")
    revalidatePath("/teacher")
    revalidatePath("/admin")
    return { success: true }
}
