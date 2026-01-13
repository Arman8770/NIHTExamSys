"use client"

import { useEffect, useState, useTransition } from "react"
import { getNoneRoleUsers, updateUserRole } from "@/app/actions/permissions"
import { Roles } from "@/types/role"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Loader2, Users, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

export default function TeacherStudentsPage() {
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isPending, startTransition] = useTransition()
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await getNoneRoleUsers()
        if (res.users) {
            setUsers(res.users)
        } else {
            setMessage({ type: 'error', text: res.error || "Failed to fetch pending users" })
        }
        setLoading(false)
    }

    const handleApprove = (userId: string) => {
        setMessage(null)
        startTransition(async () => {
            const res = await updateUserRole(userId, Roles.STUDENT)
            if (res.success) {
                setMessage({ type: 'success', text: "Student approved successfully" })
                fetchUsers()
            } else {
                setMessage({ type: 'error', text: res.error || "Failed to approve student" })
            }
        })
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center p-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <Users className="h-8 w-8 text-primary" />
                        Pending Approvals
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Approve new users as students to grant them access to exams
                    </p>
                </div>
            </div>

            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-destructive/10 text-destructive border-destructive/20'
                    } animate-in fade-in slide-in-from-top-2`}>
                    {message.text}
                </div>
            )}

            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="font-semibold">User Info</TableHead>
                            <TableHead className="font-semibold">Contact & Location</TableHead>
                            <TableHead className="font-semibold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-10 text-muted-foreground">
                                    No pending student requests found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow key={user.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-base">{user.name}</span>
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                                                <Mail className="h-3 w-3" />
                                                {user.email}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-1.5 text-sm">
                                                <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                                                {user.phoneNumber || "N/A"}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-sm">
                                                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                                                {user.city || "N/A"}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            onClick={() => handleApprove(user.id)}
                                            disabled={isPending}
                                            size="sm"
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            <CheckCircle className="h-4 w-4 mr-2" />
                                            Approve as Student
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
