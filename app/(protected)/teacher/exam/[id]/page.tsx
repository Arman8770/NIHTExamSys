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

export default async function ExamScoresPage({ params }: { params: { id: string } }) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    const { id } = params

    const exam = await prisma.exam.findUnique({
        where: { id: id },
        include: {
            results: {
                include: { student: true },
                orderBy: { score: 'desc' }
            }
        }

    })

    if (!exam) return <div>Exam not found</div>

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-2">{exam.title} - Scores</h1>
            <p className="text-muted-foreground mb-6">{exam.description}</p>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Score</TableHead>
                            <TableHead>Time Taken</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {exam.results.map((result: any) => (
                            <TableRow key={result.id}>
                                <TableCell>{result.student.name}</TableCell>
                                <TableCell>{result.student.email}</TableCell>
                                <TableCell>{result.score}</TableCell>
                                <TableCell>{Math.floor(result.completionTime / 60)}m {result.completionTime % 60}s</TableCell>
                                <TableCell>{new Date(result.createdAt).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                        {exam.results.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center">No results yet.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
