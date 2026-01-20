import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, CheckCircle, ArrowRight } from "lucide-react"

import { getExams } from "@/app/actions/exam"

export default async function StudentPage() {
    const session = await auth()
    if (session?.user?.role !== "STUDENT") redirect("/")

    const res = await getExams()
    const exams = res.exams || []

    const results = await prisma.result.findMany({
        where: { studentId: session.user.id }
    })

    // Create a map for quick access to results by examId
    const resultMap = new Map(results.map((r: any) => [r.examId, r]))
    const takenExamIds = new Set(results.map((r: any) => r.examId))

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
                <p className="text-muted-foreground">View available exams and your performance history.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {exams.map((exam: any) => {
                    const isTaken = takenExamIds.has(exam.id)
                    const result = resultMap.get(exam.id)

                    return (
                        <Card key={exam.id} className="flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-start gap-2">
                                    <div className="flex-1">
                                        <CardTitle className="line-clamp-1">{exam.title}</CardTitle>
                                        <CardDescription className="mt-2 line-clamp-2">
                                            {exam.description || "No description."}
                                        </CardDescription>
                                    </div>
                                    {isTaken && (
                                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <div className="flex items-center text-sm text-muted-foreground gap-4">
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="h-4 w-4" />
                                        <span>{exam.teacher.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{exam.timeLimit}m</span>
                                    </div>
                                </div>

                                {isTaken && result && (
                                    <div className="p-3 bg-muted rounded-lg flex justify-between items-center">
                                        <span className="text-sm font-medium">Score</span>
                                        {(() => {
                                            const totalQuestions = exam._count.questions || 0
                                            const cgpa = totalQuestions > 0 ? (result.score / totalQuestions) * 10 : 0
                                            return (
                                                <Badge variant={cgpa >= 5 ? "default" : "destructive"}>
                                                    CGPA: {cgpa.toFixed(1)}
                                                </Badge>
                                            )
                                        })()}
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                {isTaken ? (
                                    <Link href={`/student/results/${exam.id}`} className="w-full">
                                        <Button variant="outline" className="w-full">
                                            View Details
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href={`/student/exam/${exam.id}`} className="w-full">
                                        <Button className="w-full group">
                                            Start Exam
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                )}
                            </CardFooter>
                        </Card>
                    )
                })}

                {exams.length === 0 && (
                    <div className="col-span-full text-center py-12 border-2 border-dashed rounded-lg text-muted-foreground">
                        No exams available at the moment.
                    </div>
                )}
            </div>
        </div>
    )
}
