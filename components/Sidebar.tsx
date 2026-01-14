"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    Menu,
    LogOut,
    ShieldCheck,
    GraduationCap,
    Award
} from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { useState } from "react"
import { User } from "next-auth"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    user: User | undefined
}

export function Sidebar({ className, user }: SidebarProps) {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            role: "STUDENT"
        },
        {
            label: "Teacher Dashboard",
            icon: BookOpen,
            href: "/teacher",
            role: "TEACHER"
        },
        {
            label: "Admin Dashboard",
            icon: ShieldCheck,
            href: "/admin",
            role: "ADMIN"
        },
        {
            label: "User Management",
            icon: Users,
            href: "/admin/users",
            role: "ADMIN"
        },
        {
            label: "Student Approval",
            icon: Users,
            href: "/teacher/students",
            role: "TEACHER"
        },
        {
            label: "Manage Exams",
            icon: BookOpen,
            href: "/teacher/exams",
            role: "TEACHER"
        },
        {
            label: "All Exams",
            icon: BookOpen,
            href: "/admin/exams", // We'll create this or redirect
            role: "ADMIN"
        },
        {
            label: "My Results",
            icon: Award,
            href: "/student/results", // Needs specific logic or general list
            role: "STUDENT"
        },
        {
            label: "Certificates",
            icon: ShieldCheck,
            href: "/student/certificates",
            role: "STUDENT"
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/settings",
            role: "ALL"
        }
    ]

    const filteredRoutes = routes.filter(route =>
        route.role === "ALL" || route.role === user?.role || (user?.role === "ADMIN")
    )

    const SidebarContent = () => (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
            <div className="px-3 py-2">
                <Link href="/" className="flex items-center pl-3 mb-14">
                    <GraduationCap className="h-8 w-8 mr-4 text-blue-500" />
                    <h1 className="text-2xl font-bold">
                        Exam<span className="text-blue-500">Sys</span>
                    </h1>
                </Link>
                <div className="space-y-1">
                    {filteredRoutes.map((route) => (
                        <Link
                            key={route.label}
                            href={route.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href || pathname?.startsWith(route.href + "/")
                                    ? "text-white bg-white/10"
                                    : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3",
                                    pathname === route.href ? "text-blue-500" : "text-zinc-400 group-hover:text-blue-500"
                                )} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {user && (
                <div className="mt-auto px-3 py-2">
                    <div className="flex items-center p-3 mb-4 bg-white/5 rounded-xl">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                                {user?.name}
                            </p>
                            <p className="text-xs text-zinc-400 truncate">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                    <Button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        variant="ghost"
                        className="w-full justify-start text-zinc-400 hover:text-white hover:bg-white/10"
                    >
                        <LogOut className="h-5 w-5 mr-3" />
                        Sign Out
                    </Button>
                </div>
            )}
        </div>
    )

    return (
        <>
            {/* Mobile Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 bg-slate-900 border-r-slate-800 w-72">
                    <SidebarContent />
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
                <SidebarContent />
            </div>
        </>
    )
}
