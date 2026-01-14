"use client"

import { useEffect, useState, useTransition, useCallback } from "react"
import { getStudentsAndRequests, bulkUpdateRole, deleteUsers } from "@/app/actions/permissions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Users, CheckCircle, Mail, MapPin, Phone, Search, Filter, MoreHorizontal, Trash2, XCircle, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { DateRange } from "react-day-picker"

export default function TeacherStudentsPage() {
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isPending, startTransition] = useTransition()
    const [query, setQuery] = useState("")
    const [status, setStatus] = useState<"ALL" | "PENDING" | "APPROVED">("PENDING")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const [date, setDate] = useState<DateRange | undefined>()

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const startDate = date?.from ? date.from.toISOString() : undefined
        const endDate = date?.to ? date.to.toISOString() : undefined

        const res = await getStudentsAndRequests(page, 10, query, status, startDate, endDate)
        if (res.users) {
            setUsers(res.users)
            setTotalPages(res.totalPages || 1)
        } else {
            setMessage({ type: 'error', text: res.error || "Failed to fetch users" })
        }
        setLoading(false)
        setSelectedUsers([])
    }, [page, query, status, date])

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchUsers()
        }, 500)
        return () => clearTimeout(timeout)
    }, [page, query, status, date, fetchUsers])

    const handleBulkAction = async (action: "APPROVE" | "UNAPPROVE" | "DELETE") => {
        if (!confirm(`Are you sure you want to ${action.toLowerCase()} ${selectedUsers.length} users?`)) return

        startTransition(async () => {
            let res
            if (action === "APPROVE") {
                res = await bulkUpdateRole(selectedUsers, "STUDENT")
            } else if (action === "UNAPPROVE") {
                res = await bulkUpdateRole(selectedUsers, "NONE")
            } else if (action === "DELETE") {
                res = await deleteUsers(selectedUsers)
            }

            if (res?.success) {
                setMessage({ type: 'success', text: "Action completed successfully" })
                fetchUsers()
            } else {
                setMessage({ type: 'error', text: res?.error || "Action failed" })
            }
        })
    }

    const toggleUser = (userId: string) => {
        setSelectedUsers(prev =>
            prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
        )
    }

    const toggleAll = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([])
        } else {
            setSelectedUsers(users.map(u => u.id))
        }
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <Users className="h-8 w-8 text-primary" />
                        Student Management
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Manage approvals, search students, and update roles.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {selectedUsers.length > 0 && (
                        <div className="flex items-center gap-2 animate-in slide-in-from-right-4">
                            <Button size="sm" variant="default" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => handleBulkAction("APPROVE")}>
                                <CheckCircle className="h-4 w-4 mr-2" /> Approve ({selectedUsers.length})
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleBulkAction("UNAPPROVE")}>
                                <XCircle className="h-4 w-4 mr-2" /> Unapprove
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleBulkAction("DELETE")}>
                                <Trash2 className="h-4 w-4 mr-2" /> Delete
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {message && (
                <div className={`p-4 rounded-lg border ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-destructive/10 text-destructive border-destructive/20'
                    } flex justify-between items-center animate-in fade-in slide-in-from-top-2`}>
                    {message.text}
                    <button onClick={() => setMessage(null)} className="cursor-pointer"><XCircle className="h-4 w-4" /></button>
                </div>
            )}

            <div className="flex flex-col xl:flex-row gap-4 justify-between items-start xl:items-center bg-card p-4 rounded-xl border shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 w-full xl:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name, email, city..."
                            className="pl-9"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-full md:w-[260px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date range</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="flex items-center gap-2 w-full xl:w-auto">
                    <div className="flex p-1 bg-muted rounded-lg w-full md:w-auto overflow-x-auto">
                        <button
                            onClick={() => setStatus("PENDING")}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${status === "PENDING" ? "bg-white shadow text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => setStatus("APPROVED")}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${status === "APPROVED" ? "bg-white shadow text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            Approved
                        </button>
                        <button
                            onClick={() => setStatus("ALL")}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${status === "ALL" ? "bg-white shadow text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            All
                        </button>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[40px]">
                                <Checkbox
                                    checked={users.length > 0 && selectedUsers.length === users.length}
                                    onCheckedChange={toggleAll}
                                />
                            </TableHead>
                            <TableHead className="font-semibold">User Info</TableHead>
                            <TableHead className="font-semibold">Status</TableHead>
                            <TableHead className="font-semibold">Contact & Location</TableHead>
                            <TableHead className="font-semibold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />
                                </TableCell>
                            </TableRow>
                        ) : users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                                    No users found matching your criteria.
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow key={user.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedUsers.includes(user.id)}
                                            onCheckedChange={() => toggleUser(user.id)}
                                        />
                                    </TableCell>
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
                                        <Badge variant={user.role === "STUDENT" ? "default" : "secondary"} className={
                                            user.role === "STUDENT" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-amber-500 hover:bg-amber-600 text-white"
                                        }>
                                            {user.role === "STUDENT" ? "Approved" : "Pending"}
                                        </Badge>
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
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                {user.role !== "STUDENT" && (
                                                    <DropdownMenuItem onClick={() => {
                                                        setSelectedUsers([user.id])
                                                        handleBulkAction("APPROVE")
                                                    }} className="text-emerald-600">
                                                        <CheckCircle className="mr-2 h-4 w-4" /> Approve
                                                    </DropdownMenuItem>
                                                )}
                                                {user.role === "STUDENT" && (
                                                    <DropdownMenuItem onClick={() => {
                                                        setSelectedUsers([user.id])
                                                        handleBulkAction("UNAPPROVE")
                                                    }} className="text-amber-600">
                                                        <XCircle className="mr-2 h-4 w-4" /> Unapprove
                                                    </DropdownMenuItem>
                                                )}
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => {
                                                    setSelectedUsers([user.id])
                                                    handleBulkAction("DELETE")
                                                }} className="text-destructive">
                                                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Page {page} of {totalPages}
                </p>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
