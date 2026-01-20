"use client"

import { useState, useEffect, useTransition } from "react"
import { useSession } from "next-auth/react"
import {
    getBatches,
    createBatch,
    deleteBatch,
    assignStudentsToBatch,
    assignExamsToBatch,
    getBatchDetails,
    assignTeachersToBatch,
    transferBatchOwnership,
    getBatchAssignments
} from "@/app/actions/batch"
import { getExams, getAllAssignmentUsers } from "@/app/actions/exam"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Plus, Users, BookOpen, Trash2, Edit, ChevronRight, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BatchManagement() {
    const [batches, setBatches] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isPending, startTransition] = useTransition()

    // Dialog states
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isAssignStudentsOpen, setIsAssignStudentsOpen] = useState(false)
    const [isAssignExamsOpen, setIsAssignExamsOpen] = useState(false)

    const [selectedBatch, setSelectedBatch] = useState<any>(null)
    const [allStudents, setAllStudents] = useState<any[]>([])
    const [allExams, setAllExams] = useState<any[]>([])
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    // Filter states
    const [studentSearch, setStudentSearch] = useState("")
    const [cityFilter, setCityFilter] = useState("")
    const [isAssignTeachersOpen, setIsAssignTeachersOpen] = useState(false)
    const [allTeachers, setAllTeachers] = useState<any[]>([])
    const [selectedTeachers, setSelectedTeachers] = useState<string[]>([])
    const [currentUserRole, setCurrentUserRole] = useState<string>("")
    const [currentUserId, setCurrentUserId] = useState<string>("")

    const { data: session } = useSession()

    useEffect(() => {
        if (session?.user) {
            setCurrentUserRole(session.user.role || "")
            setCurrentUserId(session.user.id || "")
        }
    }, [session])

    useEffect(() => {
        loadBatches()
    }, [])

    const loadBatches = async () => {
        setLoading(true)
        const res = await getBatches()
        if (res.batches) setBatches(res.batches)
        setLoading(false)
    }

    const handleCreateBatch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        const description = formData.get("description") as string

        const res = await createBatch({ name, description })
        if (res.success) {
            setIsCreateOpen(false)
            loadBatches()
        } else {
            alert(res.error)
        }
    }

    const handleDeleteBatch = async (id: string) => {
        if (!confirm("Are you sure you want to delete this batch?")) return
        const res = await deleteBatch(id)
        if (res.success) loadBatches()
        else alert(res.error)
    }

    const openAssignStudents = async (batch: any) => {
        setSelectedBatch(batch)
        setLoading(true)
        const [usersRes, batchDetailsRes] = await Promise.all([
            getAllAssignmentUsers(),
            getBatchDetails(batch.id)
        ])

        if (usersRes.users) {
            // Only show approved students (Role: STUDENT, not NONE)
            setAllStudents(usersRes.users.filter((u: any) => u.role === "STUDENT"))
        }
        if (batchDetailsRes.batch) {
            setSelectedItems(batchDetailsRes.batch.students.map((s: any) => s.id))
        }
        setLoading(false)
        setIsAssignStudentsOpen(true)
    }

    const openAssignTeachers = async (batch: any) => {
        setSelectedBatch(batch)
        setLoading(true)
        const [usersRes, batchDetailsRes] = await Promise.all([
            getAllAssignmentUsers(),
            getBatchDetails(batch.id)
        ])

        if (usersRes.users) {
            // Show only teachers, excluding current creator
            setAllTeachers(usersRes.users.filter((u: any) => u.role === "TEACHER" && u.id !== batch.creatorId))
        }
        if (batchDetailsRes.batch) {
            setSelectedTeachers(batchDetailsRes.batch.assignments.map((a: any) => a.teacherId))
        }
        setLoading(false)
        setIsAssignTeachersOpen(true)
    }

    const openAssignExams = async (batch: any) => {
        setSelectedBatch(batch)
        setLoading(true)
        const [examsRes, batchDetailsRes] = await Promise.all([
            getExams(),
            getBatchDetails(batch.id)
        ])

        if (examsRes.exams) setAllExams(examsRes.exams)
        if (batchDetailsRes.batch) {
            setSelectedItems(batchDetailsRes.batch.exams.map((e: any) => e.id))
        }
        setLoading(false)
        setIsAssignExamsOpen(true)
    }

    const handleSaveStudents = async () => {
        if (!selectedBatch) return
        const res = await assignStudentsToBatch(selectedBatch.id, selectedItems)
        if (res.success) {
            setIsAssignStudentsOpen(false)
            loadBatches()
        } else alert(res.error)
    }

    const handleSaveExams = async () => {
        if (!selectedBatch) return
        const res = await assignExamsToBatch(selectedBatch.id, selectedItems)
        if (res.success) {
            setIsAssignExamsOpen(false)
            loadBatches()
        } else alert(res.error)
    }

    const toggleItem = (id: string) => {
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const toggleTeacher = (id: string) => {
        setSelectedTeachers(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const handleSaveTeachers = async () => {
        if (!selectedBatch) return
        const res = await assignTeachersToBatch(selectedBatch.id, selectedTeachers)
        if (res.success) {
            setIsAssignTeachersOpen(false)
            loadBatches()
        } else alert(res.error)
    }

    const handleTransferOwnership = async (newOwnerId: string) => {
        if (!selectedBatch) return
        if (!confirm("Are you sure you want to transfer ownership? You might lose deletion rights.")) return
        const res = await transferBatchOwnership(selectedBatch.id, newOwnerId)
        if (res.success) {
            setIsAssignTeachersOpen(false)
            loadBatches()
        } else alert(res.error)
    }

    const filteredStudents = allStudents.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
            student.email.toLowerCase().includes(studentSearch.toLowerCase())
        const matchesCity = cityFilter === "" || student.city?.toLowerCase() === cityFilter.toLowerCase()
        return matchesSearch && matchesCity
    })

    const uniqueCities = Array.from(new Set(allStudents.map(s => s.city).filter(Boolean)))

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight">Batches</h2>
                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogTrigger asChild>
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" /> Create Batch
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <form onSubmit={handleCreateBatch}>
                            <DialogHeader>
                                <DialogTitle>Create New Batch</DialogTitle>
                                <DialogDescription>Create a group to manage students and exams together.</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Batch Name</Label>
                                    <Input id="name" name="name" placeholder="e.g. Physics 101 - A" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Description (Optional)</Label>
                                    <Input id="description" name="description" placeholder="Short description..." />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Create Batch</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Batch Name</TableHead>
                                <TableHead>Instructor</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Exams</TableHead>
                                <TableHead>Collaborators</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading && batches.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-10">
                                        <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                                    </TableCell>
                                </TableRow>
                            ) : batches.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                                        No batches created yet.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                batches.map((batch) => (
                                    <TableRow key={batch.id}>
                                        <TableCell>
                                            <div className="font-medium text-base">{batch.name}</div>
                                            <div className="text-xs text-muted-foreground">{batch.description}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium">{batch.creator?.name || "System"}</span>
                                                {batch.creatorId === currentUserId && (
                                                    <Badge variant="outline" className="w-fit text-[10px] px-1 py-0 h-4">Owner</Badge>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="gap-1">
                                                <Users className="h-3 w-3" />
                                                {batch._count.students}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="gap-1 font-semibold text-blue-600">
                                                <BookOpen className="h-3 w-3" />
                                                {batch._count.exams}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="gap-1">
                                                <ShieldCheck className="h-3 w-3" />
                                                {batch._count.assignments}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-muted-foreground">
                                            {new Date(batch.createdAt).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm" onClick={() => openAssignStudents(batch)}>
                                                    Students
                                                </Button>
                                                <Button variant="outline" size="sm" onClick={() => openAssignExams(batch)}>
                                                    Exams
                                                </Button>
                                                {(currentUserRole === "ADMIN" || batch.creatorId === currentUserId) && (
                                                    <>
                                                        <Button variant="outline" size="sm" onClick={() => openAssignTeachers(batch)}>
                                                            Teachers
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDeleteBatch(batch.id)}>
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Assign Students Dialog */}
            <Dialog open={isAssignStudentsOpen} onOpenChange={setIsAssignStudentsOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Assign Students to {selectedBatch?.name}</DialogTitle>
                        <DialogDescription>Select verified students and search by name, email or city.</DialogDescription>
                    </DialogHeader>

                    <div className="flex gap-2 py-2">
                        <Input
                            placeholder="Search students..."
                            value={studentSearch}
                            onChange={(e) => setStudentSearch(e.target.value)}
                            className="flex-1"
                        />
                        <select
                            className="flex h-10 w-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={cityFilter}
                            onChange={(e) => setCityFilter(e.target.value)}
                        >
                            <option value="">All Cities</option>
                            {uniqueCities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <ScrollArea className="h-[300px] border rounded-md p-4 bg-muted/20">
                        <div className="space-y-4">
                            {filteredStudents.length === 0 ? (
                                <p className="text-center text-muted-foreground py-8">No students found matching filters.</p>
                            ) : (
                                filteredStudents.map(student => (
                                    <div key={student.id} className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded-lg transition-colors border border-transparent hover:border-border">
                                        <Checkbox
                                            id={`s-${student.id}`}
                                            checked={selectedItems.includes(student.id)}
                                            onCheckedChange={() => toggleItem(student.id)}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <label htmlFor={`s-${student.id}`} className="text-sm font-medium leading-none cursor-pointer block truncate">
                                                {student.name}
                                            </label>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] text-muted-foreground truncate">{student.email}</span>
                                                {student.city && <Badge variant="outline" className="text-[9px] px-1 py-0">{student.city}</Badge>}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                    <div className="flex justify-between items-center text-xs text-muted-foreground px-1">
                        <span>Selected: {selectedItems.length}</span>
                        <span>Total Found: {filteredStudents.length}</span>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAssignStudentsOpen(false)}>Cancel</Button>
                        <Button onClick={handleSaveStudents}>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Assign Teachers Dialog */}
            <Dialog open={isAssignTeachersOpen} onOpenChange={setIsAssignTeachersOpen}>
                <DialogContent className="sm:max-w-[450px]">
                    <DialogHeader>
                        <DialogTitle>Mange Teachers: {selectedBatch?.name}</DialogTitle>
                        <DialogDescription>Assign collaborators or transfer ownership.</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[250px] border rounded-md p-4">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold border-b pb-2">Assign Collaborators</h4>
                            {allTeachers.length === 0 ? (
                                <p className="text-center text-muted-foreground py-4 text-sm">No other teachers available.</p>
                            ) : (
                                allTeachers.map(teacher => (
                                    <div key={teacher.id} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg group">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`t-${teacher.id}`}
                                                checked={selectedTeachers.includes(teacher.id)}
                                                onCheckedChange={() => toggleTeacher(teacher.id)}
                                            />
                                            <div className="min-w-0">
                                                <label htmlFor={`t-${teacher.id}`} className="text-sm font-medium cursor-pointer block">{teacher.name}</label>
                                                <span className="text-xs text-muted-foreground">{teacher.email}</span>
                                            </div>
                                        </div>
                                        {currentUserRole === "ADMIN" && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] h-7"
                                                onClick={() => handleTransferOwnership(teacher.id)}
                                            >
                                                Make Owner
                                            </Button>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAssignTeachersOpen(false)}>Cancel</Button>
                        <Button onClick={handleSaveTeachers}>Save Assignments</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Assign Exams Dialog */}
            <Dialog open={isAssignExamsOpen} onOpenChange={setIsAssignExamsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Assign Exams to {selectedBatch?.name}</DialogTitle>
                        <DialogDescription>Select exams for this batch.</DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[300px] border rounded-md p-4">
                        <div className="space-y-4">
                            {allExams.map(exam => (
                                <div key={exam.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`e-${exam.id}`}
                                        checked={selectedItems.includes(exam.id)}
                                        onCheckedChange={() => toggleItem(exam.id)}
                                    />
                                    <label htmlFor={`e-${exam.id}`} className="text-sm leading-none cursor-pointer">
                                        {exam.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <DialogFooter>
                        <Button onClick={handleSaveExams}>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
