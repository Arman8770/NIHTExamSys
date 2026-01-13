import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Plus, Users, Clock, ArrowRight, FileText, Trash2, Search, BookOpen } from "lucide-react"
import { deleteExam } from "@/app/actions/exam"
import { Badge } from "@/components/ui/badge"

export default async function AdminExamsPage() {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") redirect("/")

    const exams = await prisma.exam.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            teacher: { select: { name: true } },
            _count: { select: { results: true } }
        }
    })

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <BookOpen className="h-8 w-8 text-primary" />
                        System Exams
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Monitor and manage all assessments across the platform
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="px-4 py-1 text-sm bg-muted/50">
                        Total Exams: {exams.length}
                    </Badge>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {exams.map((exam) => (
                    <Card key={exam.id} className="relative overflow-hidden group shadow-md hover:shadow-lg transition-all border-l-4 border-l-primary/30">
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start">
                                <CardTitle className="line-clamp-1">{exam.title}</CardTitle>
                                <form action={async () => {
                                    "use server"
                                    await deleteExam(exam.id)
                                }}>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                            <CardDescription className="line-clamp-2 mt-1">
                                {exam.description || "No description provided."}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                    <Users className="h-4 w-4 mr-2" />
                                    <span>Instructor: <span className="text-foreground font-medium">{exam.teacher.name}</span></span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>Duration: <span className="text-foreground font-medium">{exam.timeLimit} mins</span></span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <Award className="h-4 w-4 mr-2" />
                                    <span>Attempts: <span className="text-foreground font-medium">{exam._count.results}</span></span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-muted/30 pt-4">
                            <Link href={`/admin/exam/${exam.id}`} className="w-full">
                                <Button variant="outline" className="w-full bg-background hover:bg-primary hover:text-primary-foreground transition-all">
                                    System Insights
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}

                {exams.length === 0 && (
                    <div className="col-span-full py-12 text-center border-2 border-dashed rounded-xl bg-muted/50">
                        <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">No exams found</h3>
                        <p className="text-muted-foreground">There are no exams currently available in the system.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

import { Award } from "lucide-react"
