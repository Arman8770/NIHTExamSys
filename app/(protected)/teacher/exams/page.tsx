
import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlusCircle, Edit } from "lucide-react"
import { DeleteExamButton } from "@/components/DeleteExamButton"

import { getExams } from "@/app/actions/exam"
import { AssignExamModal } from "@/components/AssignExamModal"

export default async function TeacherExamsPage() {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    const { exams = [], error } = await getExams() as { exams: any[], error?: string }

    if (error) {
        return <div className="p-8 text-center text-destructive">Error: {error}</div>
    }

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Manage Exams</h1>
                    <p className="text-muted-foreground">Create, edit, and delete your exams.</p>
                </div>
                <Link href="/teacher/create">
                    <Button className="gap-2">
                        <PlusCircle className="h-4 w-4" />
                        Create New Exam
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Your Exams List</CardTitle>
                    <CardDescription>Total {exams.length} exams created.</CardDescription>
                </CardHeader>
                <CardContent>
                    {exams.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                            <p>No exams created yet.</p>
                            <Link href="/teacher/create" className="mt-4 inline-block">
                                <Button variant="secondary">Create Your First Exam</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {exams.map((exam) => (
                                <div key={exam.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors gap-4">
                                    <div className="space-y-1 flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-lg">{exam.title}</h3>
                                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                                                {exam.timeLimit}m
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{exam.description}</p>
                                        <div className="pt-2 flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>Results: {exam._count.results}</span>
                                            <span>Created: {new Date(exam.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 self-end md:self-center">
                                        <AssignExamModal examId={exam.id} examTitle={exam.title} />
                                        <Link href={`/teacher/exam/${exam.id}/edit`}>
                                            <Button variant="ghost" size="icon" title="Edit Exam">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <DeleteExamButton examId={exam.id} />
                                        <Link href={`/teacher/exam/${exam.id}`}>
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
