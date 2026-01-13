"use client"

import { useEffect, useState, useTransition } from "react"
import { getAllUsers, updateUserRole } from "@/app/actions/permissions"
import { Role, Roles } from "@/types/role"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2, UserCog, ShieldCheck, Mail, MapPin, Phone } from "lucide-react"

export default function AdminUsersPage() {
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isPending, startTransition] = useTransition()
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await getAllUsers()
        if (res.users) {
            setUsers(res.users)
        } else {
            setMessage({ type: 'error', text: res.error || "Failed to fetch users" })
        }
        setLoading(false)
    }

    const handleRoleChange = (userId: string, newRole: Role) => {
        setMessage(null)
        startTransition(async () => {
            const res = await updateUserRole(userId, newRole)
            if (res.success) {
                setMessage({ type: 'success', text: res.success })
                fetchUsers()
            } else {
                setMessage({ type: 'error', text: res.error || "Failed to update role" })
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
                        <UserCog className="h-8 w-8 text-primary" />
                        User Management
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Manage user roles and system permissions
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
                            <TableHead className="font-semibold">Current Role</TableHead>
                            <TableHead className="font-semibold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
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
                                <TableCell>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${user.role === 'ADMIN' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                        user.role === 'TEACHER' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                            user.role === 'STUDENT' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                                'bg-gray-50 text-gray-700 border-gray-200'
                                        }`}>
                                        {user.role}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Select
                                        defaultValue={user.role}
                                        onValueChange={(value) => handleRoleChange(user.id, value as Role)}
                                        disabled={isPending}
                                    >
                                        <SelectTrigger className="w-[140px] ml-auto">
                                            <SelectValue placeholder="Select role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value={Roles.ADMIN}>Admin</SelectItem>
                                            <SelectItem value={Roles.TEACHER}>Teacher</SelectItem>
                                            <SelectItem value={Roles.STUDENT}>Student</SelectItem>
                                            <SelectItem value={Roles.NONE}>None</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
