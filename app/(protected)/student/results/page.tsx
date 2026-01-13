import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

export default async function StudentResultsPage() {
    const session = await auth()
    if (!session || (session.user.role !== "STUDENT" && session.user.role !== "ADMIN")) {
        redirect("/")
    }

    const results = await prisma.result.findMany({
        where: { studentId: session.user.id },
        include: {
            exam: {
                include: {
                    _count: { select: { questions: true } }
                }
            }
        },
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div className="container mx-auto px-4 py-8 space-y-8 min-h-[calc(100vh-4rem)]">
            <Link href="/student" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </Link>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-primary-foreground shadow-2xl">
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">My Exam Results</h1>
                    <p className="text-emerald-50/80 max-w-2xl text-lg">
                        Review your performance across all completed assessments.
                    </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 -skew-x-12 transform origin-top-right" />
            </div>

            <div className="grid gap-6">
                {results.map((result) => {
                    const totalQuestions = result.exam._count.questions
                    const percentage = Math.round((result.score / totalQuestions) * 100)

                    return (
                        <Card key={result.id} className="overflow-hidden hover:shadow-md transition-shadow">
                            <CardHeader className="pb-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <CardTitle className="text-xl">{result.exam.title}</CardTitle>
                                        <CardDescription className="flex items-center gap-2">
                                            Completed on {new Date(result.createdAt).toLocaleDateString()}
                                        </CardDescription>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Score</p>
                                            <div className="flex items-center gap-2">
                                                <Badge variant={percentage >= 60 ? "default" : "destructive"} className="text-lg px-3 py-0.5">
                                                    {percentage}%
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Correct</p>
                                            <p className="text-lg font-bold">{result.score} / {totalQuestions}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardFooter className="bg-muted/30 border-t py-3 flex justify-between items-center px-6">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="mr-2 h-4 w-4" />
                                    <span>Time: {Math.floor(result.completionTime / 60)}m {result.completionTime % 60}s</span>
                                </div>
                                <Link href={`/student/results/${result.examId}`}>
                                    <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 font-semibold group/btn">
                                        View Breakdown <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                })}

                {results.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed rounded-3xl bg-muted/30">
                        <div className="bg-background p-4 rounded-full shadow-sm mb-4">
                            <Trophy className="h-10 w-10 text-muted-foreground/30" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight mb-2">No results yet</h3>
                        <p className="text-muted-foreground max-w-sm text-lg">You haven't completed any exams yet. Go to your dashboard to start your first assessment!</p>
                        <Link href="/student" className="mt-8">
                            <Button size="lg" className="rounded-full px-8">Find Exams</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
