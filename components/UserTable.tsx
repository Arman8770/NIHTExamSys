"use client"

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
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { User } from "@prisma/client"
import { Role } from "@/types/role"
import { updateUserRole } from "@/app/actions/user"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

interface UserTableProps {
    users: any[]
}

export function UserTable({ users }: UserTableProps) {
    const router = useRouter()
    const [loadingId, setLoadingId] = useState<string | null>(null)

    const handleRoleChange = async (userId: string, newRole: Role) => {
        setLoadingId(userId)
        try {
            await updateUserRole(userId, newRole)
            router.refresh()
        } finally {
            setLoadingId(null)
        }
    }

    const getRoleBadgeVariant = (role: string) => {
        switch (role) {
            case "ADMIN": return "destructive" // Keep destructive for distinctiveness, or switch to primary
            case "TEACHER": return "default" // Primary blue
            case "STUDENT": return "secondary" // Gray
            default: return "outline"
        }
    }

    return (
        <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow className="hover:bg-transparent border-b border-border/60">
                            <TableHead className="w-[300px] font-semibold text-primary pl-6">User</TableHead>
                            <TableHead className="font-semibold text-primary">Current Role</TableHead>
                            <TableHead className="text-right font-semibold text-primary pr-6">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className="hover:bg-muted/30 transition-colors border-b border-border/40 last:border-0">
                                <TableCell className="pl-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-10 w-10 border-2 border-background ring-2 ring-primary/10">
                                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                {user.name?.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium text-foreground">{user.name}</div>
                                            <div className="text-sm text-muted-foreground">{user.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={getRoleBadgeVariant(user.role)} className="px-3 py-1 text-xs shadow-sm">
                                        {user.role}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right pr-6">
                                    <div className="flex justify-end items-center gap-2">
                                        {loadingId === user.id && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
                                        <Select
                                            defaultValue={user.role}
                                            onValueChange={(val) => handleRoleChange(user.id, val as Role)}
                                            disabled={loadingId === user.id}
                                        >
                                            <SelectTrigger className="w-[140px] border-input/60 hover:border-primary/50 focus:ring-primary/20 transition-all">
                                                <SelectValue placeholder="Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ADMIN">ADMIN</SelectItem>
                                                <SelectItem value="TEACHER">TEACHER</SelectItem>
                                                <SelectItem value="STUDENT">STUDENT</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
