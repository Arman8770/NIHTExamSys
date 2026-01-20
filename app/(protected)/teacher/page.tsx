import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlusCircle, FileText, Users, Clock, ShieldCheck } from "lucide-react"


export default async function TeacherPage() {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

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
                        <p className="text-xs text-muted-foreground">Exams created</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalStudents}</div>
                        <p className="text-xs text-muted-foreground">Unique students participated</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">--</div>
                        <p className="text-xs text-muted-foreground">Live sessions</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6">
                <Card className="bg-gradient-to-r from-primary/5 to-transparent border-none">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Jump into Exam Management</h3>
                                <p className="text-sm text-muted-foreground">Create new exams, edit existing ones, or view detailed reports.</p>
                            </div>
                        </div>
                        <Link href="/teacher/exams">
                            <Button size="lg" className="rounded-xl shadow-lg shadow-primary/20">
                                Go to Exams
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>


        </div>
    )
}
