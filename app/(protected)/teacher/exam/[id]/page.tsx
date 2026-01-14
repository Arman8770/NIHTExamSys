import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, TrendingUp, TrendingDown, Users, Award } from "lucide-react"
import Link from "next/link"
import { ExportResultsButton } from "@/components/ExportResultsButton"

export default async function ExamScoresPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    const { id } = await params

    const exam = await prisma.exam.findUnique({
        where: { id: id },
        include: {
            questions: true,
            results: {
                include: { student: true },
                orderBy: { score: 'desc' }
            }
        }
    })

    if (!exam) return <div>Exam not found</div>

    // Calculate Analytics
    const totalStudents = exam.results.length
    const scores = exam.results.map(r => r.score)
    const maxScore = exam.questions.length // Assuming 1 point per question roughly, or we just show raw score
    // Actually detailed score calculation depends on question weight, but let's assume raw score for now

    const highestScore = scores.length > 0 ? Math.max(...scores) : 0
    const lowestScore = scores.length > 0 ? Math.min(...scores) : 0
    const averageScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : "0"

    // Pass rate assumption: 50%
    const passingScore = Math.ceil(maxScore * 0.5)
    const passedCount = scores.filter(s => s >= passingScore).length
    const passRate = totalStudents > 0 ? Math.round((passedCount / totalStudents) * 100) : 0

    // Prepare export data
    const exportData = exam.results.map((r: any) => ({
        studentName: r.student.name,
        studentEmail: r.student.email,
        score: r.score,
        totalScore: maxScore,
        completionTime: `${Math.floor(r.completionTime / 60)}m ${r.completionTime % 60}s`,
        date: new Date(r.createdAt).toLocaleDateString()
    }))

    return (
        <div className="container mx-auto py-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{exam.title}</h1>
                    <p className="text-muted-foreground">{exam.description}</p>
                </div>
                <div className="flex items-center gap-2">
                    <ExportResultsButton results={exportData} examTitle={exam.title} />
                </div>
            </div>

            {/* Analytics Cards */}
            <div className="grid gap-6 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{averageScore} <span className="text-sm text-muted-foreground font-normal">/ {maxScore}</span></div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Highest / Lowest</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{highestScore} <span className="text-sm text-muted-foreground font-normal">/ {lowestScore}</span></div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Participants</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalStudents}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
                        <TrendingDown className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{passRate}%</div>
                        <p className="text-xs text-muted-foreground">{passedCount} passed (&ge;50%)</p>
                    </CardContent>
                </Card>
            </div>

            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                <div className="p-6 border-b bg-muted/50">
                    <h3 className="font-semibold">Student Results</h3>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Score</TableHead>
                            <TableHead>Time Taken</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {exam.results.map((result: any) => (
                            <TableRow key={result.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{result.student.name}</TableCell>
                                <TableCell>{result.student.email}</TableCell>
                                <TableCell>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${result.score >= passingScore ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                        {result.score} / {maxScore}
                                    </span>
                                </TableCell>
                                <TableCell>{Math.floor(result.completionTime / 60)}m {result.completionTime % 60}s</TableCell>
                                <TableCell>{new Date(result.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell className="text-right">
                                    <Link href={`/teacher/exam/${exam.id}/result/${result.studentId}`}>
                                        <Button variant="ghost" size="sm">
                                            <Eye className="h-4 w-4 mr-2" /> View Details
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                        {exam.results.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No results yet.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
