import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlusCircle, FileText, Users, Clock } from "lucide-react"

export default async function TeacherPage() {
    const session = await auth()
    if (session?.user?.role !== "TEACHER") redirect("/")

    // Fetch basic stats
    const teacherId = session.user.id
    const exams = await prisma.exam.findMany({
        where: { teacherId },
        orderBy: { createdAt: 'desc' },
        include: {
            results: {
                select: { studentId: true }
            }
        }
    })

    const totalStudents = new Set(
        exams.flatMap(e => e.results.map(r => r.studentId)) // This is a rough estimation if not fetching deep relation
    ).size

    // For simplicity in this view, we'll just count exams
    const totalExams = exams.length

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
                    <p className="text-muted-foreground">Manage your exams and track student progress.</p>
                </div>
                <Link href="/teacher/create">
                    <Button className="gap-2">
                        <PlusCircle className="h-4 w-4" />
                        Create New Exam
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Exams</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalExams}</div>
                        <p className="text-xs text-muted-foreground">Created by you</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">--</div>
                        <p className="text-xs text-muted-foreground">Across all exams</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Active</div>
                        <p className="text-xs text-muted-foreground">Session in progress</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Your Exams</CardTitle>
                        <CardDescription>A list of exams you have created.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {exams.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                No exams created yet. Click "Create New Exam" to get started.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {exams.map((exam) => (
                                    <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors">
                                        <div className="space-y-1">
                                            <h3 className="font-semibold">{exam.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-1">{exam.description}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-sm text-muted-foreground">
                                                {exam.timeLimit} mins
                                            </div>
                                            <Link href={`/teacher/exam/${exam.id}`}>
                                                <Button variant="outline" size="sm">
                                                    Manage
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
        </div>
    )
}
