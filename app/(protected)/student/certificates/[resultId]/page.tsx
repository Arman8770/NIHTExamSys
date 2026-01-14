import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer } from "lucide-react"
import Link from "next/link"
import { CertificateView } from "@/components/CertificateView"

export default async function CertificatePage({ params }: { params: Promise<{ resultId: string }> }) {
    const session = await auth()
    if (!session || session.user.role !== "STUDENT") redirect("/")

    const { resultId } = await params

    const result = await prisma.result.findUnique({
        where: { id: resultId },
        include: { exam: { include: { questions: true } } }
    })

    if (!result || result.studentId !== session.user.id) {
        return <div className="p-10 text-center">Certificate not found.</div>
    }

    return (
        <div className="container mx-auto py-10 max-w-4xl print:p-0 print:max-w-none">
            <div className="flex items-center justify-between mb-8 print:hidden">
                <Link href="/student/certificates">
                    <Button variant="ghost">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Certificates
                    </Button>
                </Link>
                <div className="flex gap-2">
                    <span className="text-sm text-muted-foreground self-center mr-4">
                        Tip: Use "Save as PDF" in print settings to download.
                    </span>
                    {/* Using a client-side print trigger usually works best, but rendering the view is key */}
                </div>
            </div>

            <div className="print:block border shadow-2xl p-0 animate-in fade-in zoom-in-95 duration-500">
                {/* We reuse CertificateView but might need to adjust it to self-trigger or just be the content */}
                <CertificateView
                    studentName={session.user.name || "Student"}
                    examTitle={result.exam.title}
                    score={result.score}
                    totalQuestions={result.exam.questions.length}
                    date={result.createdAt}
                />
            </div>
        </div>
    )
}
