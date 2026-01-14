import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RotateCcw, ArrowLeft, Trophy, Clock, CheckCircle2, XCircle, Share2, Download, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CertificateView } from "@/components/CertificateView"

export default async function ExamResultPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session || (session.user.role !== "STUDENT" && session.user.role !== "ADMIN")) redirect("/")

    const { id } = await params

    const result = await prisma.result.findFirst({
        where: {
            examId: id,
            studentId: session.user.id
        },
        include: {
            exam: {
                include: { questions: true }
            }
        }
    })

    if (!result) redirect("/student")

    const cgpa = result.exam.questions.length > 0 ? (result.score / result.exam.questions.length) * 10 : 0
    const percentage = result.exam.questions.length > 0 ? Math.round((result.score / result.exam.questions.length) * 100) : 0

    // Determine visuals based on score
    let gradeColor = "text-destructive"
    let ringColor = "stroke-destructive"
    let message = "Keep Pushing!"
    let subMessage = "Review the material and try again to improve your score."

    if (cgpa >= 8) {
        gradeColor = "text-emerald-500"
        ringColor = "stroke-emerald-500"
        message = "Outstanding Performance!"
        subMessage = "You've mastered this topic perfectly. Keep up the great work!"
    } else if (cgpa >= 6) {
        gradeColor = "text-amber-500"
        ringColor = "stroke-amber-500"
        message = "Good Job!"
        subMessage = "Class average reached. A bit more study will get you to the top."
    }

    // SVG Circle calculations
    const radius = 60
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div className="container max-w-6xl mx-auto py-12 px-4 animate-in fade-in-50 duration-700">
            <Link href="/student" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </Link>

            <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-background to-muted/30">
                {/* Header Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-primary to-indigo-600" />

                {cgpa >= 8 && (
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Trophy className="h-64 w-64 text-yellow-500 rotate-12" />
                    </div>
                )}

                <CardContent className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Circular Progress */}
                        <div className="relative flex items-center justify-center shrink-0">
                            <svg className="h-48 w-48 rotate-[-90deg]">
                                <circle
                                    className="text-muted/20"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r={radius}
                                    cx="96"
                                    cy="96"
                                />
                                <circle
                                    className={`${ringColor} transition-all duration-1000 ease-out`}
                                    strokeWidth="12"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r={radius}
                                    cx="96"
                                    cy="96"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className={`text-4xl font-black ${gradeColor} tracking-tighter`}>
                                    {cgpa.toFixed(1)}
                                </span>
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">CGPA</span>
                            </div>
                        </div>

                        {/* Result Details */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div>
                                <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-foreground">{message}</h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">{subMessage}</p>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border shadow-sm">
                                    <Trophy className={`h-4 w-4 ${gradeColor}`} />
                                    <span className="font-semibold">{result.score}</span> / {result.exam.questions.length} Correct
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border shadow-sm">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <span className="font-semibold">{Math.floor(result.completionTime / 60)}m {result.completionTime % 60}s</span> time
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg flex items-center">
                                <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500" />
                                What you did well
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Detailed topic analysis would appear here. You showed strong understanding of core concepts.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg flex items-center">
                                <XCircle className="mr-2 h-5 w-5 text-destructive" />
                                Areas for Improvement
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Review specific questions marked incorrect to close knowledge gaps for next time.
                            </p>
                        </div>
                    </div>

                    {/* @ts-ignore: Schema fields pending migration */}
                    {result.teacherApproval && result.adminApproval && (
                        <div className="mt-8 p-6 bg-emerald-50/50 border border-emerald-100 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-100 rounded-full">
                                    <Trophy className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-emerald-900">Certificate Available!</h3>
                                    <p className="text-emerald-700">Your certificate for this exam is ready to download.</p>
                                </div>
                            </div>
                            <Link href={`/student/certificates/${result.id}`}>
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20 shadow-lg">
                                    View & Download Certificate
                                </Button>
                            </Link>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <Link href="/student" className="flex-1">
                            <Button className="w-full h-12 text-base shadow-lg hover:shadow-primary/20 transition-all font-semibold">
                                <RotateCcw className="mr-2 h-4 w-4" /> Return to Dashboard
                            </Button>
                        </Link>
                        <Button variant="outline" className="flex-1 h-12 text-base border-dashed hover:border-primary/50">
                            <Download className="mr-2 h-4 w-4" /> Download Report
                        </Button>
                    </div>

                    <Separator className="my-12" />

                    {/* Question Review Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Question Review</h2>
                            <p className="text-muted-foreground mt-1">Detailed breakdown of your performance per question.</p>
                        </div>

                        <div className="space-y-6">
                            {result.exam.questions.map((q: any, idx: number) => {
                                const userResponse = (result.responses as Record<string, number>)?.[q.id]
                                const isCorrect = userResponse === q.correctAnswerIndex
                                let options: string[] = []
                                try {
                                    options = JSON.parse(q.options)
                                } catch (e) {
                                    options = []
                                }

                                return (
                                    <Card key={q.id} className={cn(
                                        "overflow-hidden border-2 transition-all hover:shadow-md",
                                        isCorrect ? "border-emerald-500/20 bg-emerald-500/5" : "border-destructive/20 bg-destructive/5"
                                    )}>
                                        <CardHeader className="py-4 px-6 bg-muted/30">
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background border font-bold text-sm">
                                                        {idx + 1}
                                                    </span>
                                                    <CardTitle className="text-base font-semibold leading-relaxed">
                                                        {q.text}
                                                    </CardTitle>
                                                </div>
                                                {isCorrect ? (
                                                    <Badge className="bg-emerald-500 hover:bg-emerald-600">Correct</Badge>
                                                ) : (
                                                    <Badge variant="destructive">Incorrect</Badge>
                                                )}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6 space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {options.map((opt, oIdx) => {
                                                    const isUserChoice = userResponse === oIdx
                                                    const isCorrectChoice = q.correctAnswerIndex === oIdx

                                                    return (
                                                        <div
                                                            key={oIdx}
                                                            className={cn(
                                                                "p-3 rounded-lg text-sm border flex items-center gap-3",
                                                                isCorrectChoice ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 font-medium" :
                                                                    isUserChoice ? "border-destructive bg-destructive/10 text-destructive font-medium" :
                                                                        "bg-background border-border"
                                                            )}
                                                        >
                                                            <div className={cn(
                                                                "w-5 h-5 rounded-full border flex items-center justify-center shrink-0",
                                                                isCorrectChoice ? "border-emerald-500 bg-emerald-500 text-white" :
                                                                    isUserChoice ? "border-destructive bg-destructive text-white" :
                                                                        "border-muted-foreground/30"
                                                            )}>
                                                                {isCorrectChoice && <CheckCircle2 className="h-3 w-3" />}
                                                                {!isCorrectChoice && isUserChoice && <XCircle className="h-3 w-3" />}
                                                            </div>
                                                            {opt}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            {!isCorrect && (
                                                <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-dashed text-xs text-muted-foreground">
                                                    <p><span className="font-bold text-emerald-600">Tip:</span> Review the correct answer above to understand the concept better.</p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
