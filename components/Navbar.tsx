import Link from "next/link"
import { auth, signOut } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export default async function Navbar() {
    const session = await auth()
    const user = session?.user

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4">
                <Link href="/" className="mr-8 flex items-center space-x-2 transition-transform hover:scale-105">
                    <div className="bg-primary/10 p-1.5 rounded-lg active:scale-95 transition-transform">
                        {/* We need to import GraduationCap if it's not already imported, currently checking imports... */}
                        {/* It is not imported in the original file, I need to add it to imports first. */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-primary"
                        >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-primary">ExamSys</span>
                </Link>

                <div className="flex items-center space-x-1 lg:space-x-6">
                    {user && (
                        <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:bg-muted/50 px-3 py-2 rounded-md">
                            Dashboard
                        </Link>
                    )}
                    {user?.role === "ADMIN" && (
                        <Link href="/admin" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:bg-muted/50 px-3 py-2 rounded-md">
                            Admin
                        </Link>
                    )}
                    {(user?.role === "TEACHER" || user?.role === "ADMIN") && (
                        <Link href="/teacher" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:bg-muted/50 px-3 py-2 rounded-md">
                            Teacher
                        </Link>
                    )}
                    {user?.role === "STUDENT" && (
                        <Link href="/student" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:bg-muted/50 px-3 py-2 rounded-md">
                            Exams
                        </Link>
                    )}
                </div>

                <div className="ml-auto flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex flex-col items-end">
                                <span className="text-sm font-medium leading-none">{user.name}</span>
                                <span className="text-xs text-muted-foreground leading-none mt-1">{user.role}</span>
                            </div>
                            <form action={async () => {
                                "use server"
                                await signOut()
                            }}>
                                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive hover:bg-destructive/10">Logout</Button>
                            </form>
                        </div>
                    ) : (
                        <Link href="/login">
                            <Button size="sm" className="shadow-lg shadow-primary/20">Login</Button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}
