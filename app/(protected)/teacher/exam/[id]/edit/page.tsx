
import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { CreateExamForm } from "@/components/CreateExamForm"

export default async function EditExamPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    const { id } = await params

    const exam = await prisma.exam.findUnique({
        where: { id: id },
        include: { questions: true }
    })

    if (!exam) return <div>Exam not found</div>

    // Check ownership
    if (exam.teacherId !== session.user.id && session.user.role !== "ADMIN") {
        return <div>Unauthorized</div>
    }

    // Transform options from JSON string to array
    const formattedQuestions = exam.questions.map((q: any) => {
        let options: string[] = []
        try {
            options = JSON.parse(q.options)
        } catch (e) {
            options = ["", "", "", ""]
        }
        return {
            id: q.id,
            text: q.text,
            options,
            correctAnswerIndex: q.correctAnswerIndex
        }
    })

    const initialData = {
        id: exam.id,
        title: exam.title,
        description: exam.description,
        timeLimit: exam.timeLimit,
        questions: formattedQuestions
    }

    return (
        <div className="container mx-auto py-8">
            <CreateExamForm initialData={initialData} />
        </div>
    )
}
