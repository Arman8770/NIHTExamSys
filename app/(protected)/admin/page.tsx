import prisma from "@/lib/db"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { UserTable } from "@/components/UserTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, ShieldCheck, BookOpen, Plus } from "lucide-react"

export default async function AdminPage() {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") redirect("/")

    const users = await prisma.user.findMany({
        orderBy: { name: 'asc' }
    })

    const adminCount = users.filter((u: any) => u.role === "ADMIN").length
    const teacherCount = users.filter((u: any) => u.role === "TEACHER").length
    const studentCount = users.filter((u: any) => u.role === "STUDENT").length



    return (
        <div className="container mx-auto px-4 py-8 space-y-8 min-h-[calc(100vh-4rem)]">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary/70 p-8 text-primary-foreground shadow-2xl mb-8">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Dashboard</h1>
                    <p className="text-primary-foreground/80 max-w-xl">
                        Overview of system metrics, user management, and platform analytics.
                    </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 transform" />
                <div className="absolute right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-50" />
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Users className="h-24 w-24" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-border/5 bg-muted/20">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                            <Users className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="text-3xl font-bold text-primary">{users.length}</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center">
                            <span className="text-emerald-500 mr-1">●</span> Active accounts
                        </p>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <ShieldCheck className="h-24 w-24" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-border/5 bg-muted/20">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Teachers</CardTitle>
                        <div className="p-2 bg-blue-500/10 rounded-full text-blue-500">
                            <ShieldCheck className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="text-3xl font-bold text-blue-600">{teacherCount}</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center">
                            <span className="text-blue-500 mr-1">●</span> Exam creators
                        </p>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Users className="h-24 w-24" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-border/5 bg-muted/20">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Students</CardTitle>
                        <div className="p-2 bg-indigo-500/10 rounded-full text-indigo-500">
                            <Users className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="text-3xl font-bold text-indigo-600">{studentCount}</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center">
                            <span className="text-indigo-500 mr-1">●</span> Exam takers
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none overflow-hidden relative group">
                    <div className="absolute right-0 top-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="h-40 w-40" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl">Exam Hub</CardTitle>
                        <p className="text-blue-100">Create and oversee all academic assessments.</p>
                    </CardHeader>
                    <CardContent className="flex gap-4 relative z-10">
                        <Link href="/teacher/create">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold">
                                <Plus className="h-4 w-4 mr-2" /> Create Exam
                            </Button>
                        </Link>
                        <Link href="/admin/exams">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                                View All Exams
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-lg flex items-center p-6 gap-6">
                    <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">System Integrity</h3>
                        <p className="text-slate-500 text-sm">All security protocols are currently active and monitoring.</p>
                    </div>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Active Users</h2>
                <UserTable users={users} />
            </div>


        </div>
    )
}
