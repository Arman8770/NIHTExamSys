
import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function ExamResultDetailsPage({ params }: { params: Promise<{ id: string, studentId: string }> }) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    const { id, studentId } = await params

    const exam = await prisma.exam.findUnique({
        where: { id: id },
        include: {
            questions: true,
            results: {
                where: { studentId: studentId },
                include: { student: true }
            }
        }
    })

    if (!exam || exam.results.length === 0) return <div>Result not found</div>

    const result = exam.results[0]
    const questions = exam.questions

    // Parse responses safely
    let studentResponses: Record<string, number> = {}
    try {
        studentResponses = (result.responses as Record<string, number>) || {}
    } catch (e) {
        console.error("Failed to parse responses", e)
    }

    const calculateScore = () => {
        let correctCount = 0
        questions.forEach(q => {
            if (studentResponses[q.id] === q.correctAnswerIndex) {
                correctCount++
            }
        })
        return correctCount
    }

    // We already have result.score, but re-verifying or just using it is fine.
    // Let's use the stored result.score as source of truth.

    return (
        <div className="container mx-auto py-8 space-y-8 max-w-4xl">
            <div className="flex items-center gap-4">
                <Link href={`/teacher/exam/${id}`}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Result Details</h1>
                    <p className="text-muted-foreground">{result.student.name} ({result.student.email})</p>
                </div>
                <div className="ml-auto flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-2xl font-bold">{result.score} / {questions.length}</div>
                        <div className="text-xs text-muted-foreground">Final Score</div>
                    </div>
                    <div className="text-right">
                        <div className="text-lg font-semibold flex items-center justify-end gap-1">
                            <Clock className="h-4 w-4" />
                            {Math.floor(result.completionTime / 60)}m {result.completionTime % 60}s
                        </div>
                        <div className="text-xs text-muted-foreground">Time Taken</div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {questions.map((q, index) => {
                    const studentAnswerIndex = studentResponses[q.id]
                    const isCorrect = studentAnswerIndex === q.correctAnswerIndex
                    const isSkipped = studentAnswerIndex === undefined || studentAnswerIndex === null

                    let options: string[] = []
                    try {
                        options = JSON.parse(q.options)
                    } catch (e) {
                        options = ["Option 1", "Option 2", "Option 3", "Option 4"]
                    }

                    return (
                        <Card key={q.id} className={`border-l-4 ${isCorrect ? "border-l-emerald-500" : "border-l-destructive"}`}>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className="text-lg font-medium">
                                        <span className="text-muted-foreground mr-2">{index + 1}.</span>
                                        {q.text}
                                    </CardTitle>
                                    <Badge variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "bg-emerald-600" : ""}>
                                        {isCorrect ? "Correct" : isSkipped ? "Skipped" : "Incorrect"}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3 pt-2">
                                {options.map((opt, optIndex) => {
                                    const isSelected = studentAnswerIndex === optIndex
                                    const isOrignalCorrect = q.correctAnswerIndex === optIndex

                                    let optionClass = "p-3 rounded-md border flex items-center justify-between text-sm "
                                    if (isSelected && isCorrect) {
                                        optionClass += "bg-emerald-50 border-emerald-200 text-emerald-900 font-medium"
                                    } else if (isSelected && !isCorrect) {
                                        optionClass += "bg-red-50 border-red-200 text-red-900 font-medium"
                                    } else if (!isSelected && isOrignalCorrect) {
                                        optionClass += "bg-emerald-50/50 border-emerald-200 border-dashed text-emerald-800"
                                    } else {
                                        optionClass += "bg-card text-muted-foreground"
                                    }

                                    return (
                                        <div key={optIndex} className={optionClass}>
                                            <span className="flex items-center gap-2">
                                                <span className="h-5 w-5 rounded-full border flex items-center justify-center text-[10px] uppercase">
                                                    {String.fromCharCode(65 + optIndex)}
                                                </span>
                                                {opt}
                                            </span>
                                            {isSelected && (
                                                isCorrect ? <CheckCircle className="h-4 w-4 text-emerald-600" /> : <XCircle className="h-4 w-4 text-red-600" />
                                            )}
                                            {!isSelected && isOrignalCorrect && (
                                                <span className="text-xs text-emerald-600 font-semibold px-2">Correct Answer</span>
                                            )}
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
