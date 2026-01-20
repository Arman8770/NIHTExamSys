import { auth } from "@/lib/auth"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"
import { CertificateView } from "@/components/CertificateView"

export default async function CertificatePage({ params }: { params: Promise<{ resultId: string }> }) {
    const session = await auth()
    if (!session) redirect("/")

    const { resultId } = await params

    const result = await prisma.result.findUnique({
        where: { id: resultId },
        include: {
            exam: { include: { questions: true } },
            student: { select: { name: true } }
        }
    })

    if (!result) {
        return <div className="p-10 text-center text-rose-500 font-bold">Certificate not found.</div>
    }

    // Security check: Student can only see their own. Teachers/Admins can see any.
    if (session.user.role === "STUDENT" && result.studentId !== session.user.id) {
        return <div className="p-10 text-center text-rose-500 font-bold">Unauthorized access.</div>
    }

    return (
        <div className="container mx-auto py-10 max-w-4xl print:p-0 print:max-w-none">
            <CertificateView
                studentName={result.student.name || "Student"}
                examTitle={result.exam.title}
                score={result.score}
                totalQuestions={result.exam.questions.length}
                date={result.createdAt}
            />
        </div>
    )
}
