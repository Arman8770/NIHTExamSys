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
import { Loader2, UserCog, Mail, MapPin, Phone, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

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

    const renderUserTable = (filteredUsers: any[], showRequestedRole = false) => (
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            <Table>
                <TableHeader className="bg-muted/50">
                    <TableRow>
                        <TableHead className="font-semibold">User Info</TableHead>
                        <TableHead className="font-semibold">Contact & Location</TableHead>
                        <TableHead className="font-semibold">Current Role</TableHead>
                        {showRequestedRole && <TableHead className="font-semibold">Requested</TableHead>}
                        <TableHead className="font-semibold text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredUsers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={showRequestedRole ? 5 : 4} className="text-center py-8 text-muted-foreground">
                                No users found in this category.
                            </TableCell>
                        </TableRow>
                    ) : filteredUsers.map((user) => (
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
                                <Badge variant={user.role === 'NONE' ? 'secondary' : 'default'} className={
                                    user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700 hover:bg-purple-100' :
                                        user.role === 'TEACHER' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                                            user.role === 'STUDENT' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' :
                                                'bg-gray-100 text-gray-700 hover:bg-gray-100'
                                }>
                                    {user.role}
                                </Badge>
                            </TableCell>
                            {showRequestedRole && (
                                <TableCell>
                                    <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
                                        {user.requestedRole || "N/A"}
                                    </Badge>
                                </TableCell>
                            )}
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
    )

    if (loading) {
        return (
            <div className="flex items-center justify-center p-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    const pendingUsers = users.filter(u => u.role === 'NONE')
    const students = users.filter(u => u.role === 'STUDENT')
    const teachers = users.filter(u => u.role === 'TEACHER')
    const admins = users.filter(u => u.role === 'ADMIN')

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <UserCog className="h-8 w-8 text-primary" />
                        User Management
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Manage user roles, approvals, and system permissions.
                    </p>
                </div>
            </div>

            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-destructive/10 text-destructive border-destructive/20'
                    } flex justify-between items-center`}>
                    {message.text}
                    <Button variant="ghost" size="sm" onClick={() => setMessage(null)} className="h-auto p-0 text-current hover:text-current opacity-70 hover:opacity-100">Dismiss</Button>
                </div>
            )}

            <Tabs defaultValue="pending" className="space-y-6">
                <TabsList className="bg-muted/50 p-1">
                    <TabsTrigger value="pending" className="gap-2">
                        Pending Approval
                        {pendingUsers.length > 0 && (
                            <Badge variant="destructive" className="h-5 px-1.5 min-w-[1.25rem]">{pendingUsers.length}</Badge>
                        )}
                    </TabsTrigger>
                    <TabsTrigger value="students" className="gap-2">Students ({students.length})</TabsTrigger>
                    <TabsTrigger value="teachers" className="gap-2">Teachers ({teachers.length})</TabsTrigger>
                    <TabsTrigger value="admins" className="gap-2">Admins ({admins.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-4">
                    <div className="flex items-center gap-2 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 mb-4">
                        <Shield className="h-5 w-5" />
                        <p className="text-sm font-medium">These users have signed up but have not been assigned a role yet. Review their "Requested" column.</p>
                    </div>
                    {renderUserTable(pendingUsers, true)}
                </TabsContent>

                <TabsContent value="students">
                    {renderUserTable(students)}
                </TabsContent>

                <TabsContent value="teachers">
                    {renderUserTable(teachers)}
                </TabsContent>

                <TabsContent value="admins">
                    {renderUserTable(admins)}
                </TabsContent>
            </Tabs>
        </div>
    )
}
