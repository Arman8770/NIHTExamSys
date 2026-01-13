import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ExamInterface } from "@/components/ExamInterface"

export default async function TakeExamPage({ params }: { params: { id: string } }) {
    const session = await auth()
    if (!session || (session.user.role !== "STUDENT" && session.user.role !== "ADMIN")) redirect("/")

    const { id } = params

    const exam = await prisma.exam.findUnique({
        where: { id },
        include: { questions: true }
    })

    if (!exam) return <div>Exam not found</div>

    // Verify if already taken
    const existingResult = await prisma.result.findFirst({
        where: {
            examId: id,
            studentId: session.user.id
        }
    })

    if (existingResult) {
        return (
            <div className="container mx-auto py-10 text-center">
                <h1 className="text-2xl font-bold mb-4">You have already taken this exam.</h1>
                <p>Score: {existingResult.score}</p>
            </div>
        )
    }

    // Sanitize questions (Remove correct answer)
    const sanitizedQuestions = exam.questions.map((q: any) => {
        let options: string[] = []
        try {
            options = JSON.parse(q.options)
        } catch (e) {
            options = []
        }
        return {
            id: q.id,
            text: q.text,
            options
        }
    })

    return (
        <div className="container mx-auto py-10 max-w-3xl">
            <ExamInterface
                examId={exam.id}
                title={exam.title}
                timeLimitMinutes={exam.timeLimit}
                questions={sanitizedQuestions}
            />
        </div>
    )
}
