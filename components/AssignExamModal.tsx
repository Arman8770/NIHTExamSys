"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { Loader2, Users } from "lucide-react"
import { getAllAssignmentUsers, assignExamToStudents, getExamAssignments, assignExamToBatches } from "@/app/actions/exam"
import { getBatches } from "@/app/actions/batch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AssignExamModalProps {
    examId: string
    examTitle: string
}

export function AssignExamModal({ examId, examTitle }: AssignExamModalProps) {
    const [open, setOpen] = useState(false)
    const [users, setUsers] = useState<{ id: string, name: string, email: string, role: string }[]>([])
    const [batches, setBatches] = useState<{ id: string, name: string }[]>([])
    const [selectedStudents, setSelectedStudents] = useState<string[]>([])
    const [selectedBatches, setSelectedBatches] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [activeTab, setActiveTab] = useState("students")

    useEffect(() => {
        if (open) {
            loadData()
        }
    }, [open])

    const loadData = async () => {
        setLoading(true)
        try {
            const [usersRes, batchesRes, assignmentsRes] = await Promise.all([
                getAllAssignmentUsers(),
                getBatches(),
                getExamAssignments(examId)
            ])

            if (usersRes.users) setUsers(usersRes.users)
            if (batchesRes.batches) setBatches(batchesRes.batches)

            if (assignmentsRes.assignedIds) {
                setSelectedStudents(assignmentsRes.assignedIds)
            }
            if (assignmentsRes.assignedBatchIds) {
                setSelectedBatches(assignmentsRes.assignedBatchIds)
            }
        } catch (error) {
            console.error("Failed to load students", error)
        } finally {
            setLoading(false)
        }
    }

    const handleToggleStudent = (studentId: string) => {
        setSelectedStudents(prev =>
            prev.includes(studentId)
                ? prev.filter(id => id !== studentId)
                : [...prev, studentId]
        )
    }

    const handleToggleBatch = (batchId: string) => {
        setSelectedBatches(prev =>
            prev.includes(batchId)
                ? prev.filter(id => id !== batchId)
                : [...prev, batchId]
        )
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            const [resStudents, resBatches] = await Promise.all([
                assignExamToStudents(examId, selectedStudents),
                assignExamToBatches(examId, selectedBatches)
            ])

            if (resStudents.success && resBatches.success) {
                setOpen(false)
                alert("Assignments saved successfully")
            } else {
                alert("Failed to save some assignments")
            }
        } catch (error) {
            alert("An error occurred")
        } finally {
            setSaving(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                    <Users className="h-4 w-4" />
                    Assign Students
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Exam: {examTitle}</DialogTitle>
                    <DialogDescription>
                        Select students or teachers who are allowed to take or manage this exam.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    {loading ? (
                        <div className="flex justify-center p-4">
                            <Loader2 className="h-6 w-6 animate-spin" />
                        </div>
                    ) : (
                        <Tabs defaultValue="students" onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="students">Users</TabsTrigger>
                                <TabsTrigger value="batches">Batches</TabsTrigger>
                            </TabsList>
                            <TabsContent value="students" className="mt-4">
                                <ScrollArea className="h-[250px] rounded-md border p-4">
                                    <div className="space-y-4">
                                        {users.length === 0 ? (
                                            <p className="text-sm text-muted-foreground text-center">No users found.</p>
                                        ) : (
                                            users.map(user => (
                                                <div key={user.id} className="flex items-start space-x-3 space-y-0 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                                                    <Checkbox
                                                        id={user.id}
                                                        checked={selectedStudents.includes(user.id)}
                                                        onCheckedChange={() => handleToggleStudent(user.id)}
                                                    />
                                                    <div className="grid gap-1.5 leading-none flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <label
                                                                htmlFor={user.id}
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                            >
                                                                {user.name}
                                                            </label>
                                                            <span className={cn(
                                                                "text-[10px] uppercase font-bold px-1.5 py-0.5 rounded",
                                                                user.role === "TEACHER" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                                                            )}>
                                                                {user.role}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-muted-foreground">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                            <TabsContent value="batches" className="mt-4">
                                <ScrollArea className="h-[250px] rounded-md border p-4">
                                    <div className="space-y-4">
                                        {batches.length === 0 ? (
                                            <p className="text-sm text-muted-foreground text-center">No batches found.</p>
                                        ) : (
                                            batches.map(batch => (
                                                <div key={batch.id} className="flex items-start space-x-3 space-y-0">
                                                    <Checkbox
                                                        id={batch.id}
                                                        checked={selectedBatches.includes(batch.id)}
                                                        onCheckedChange={() => handleToggleBatch(batch.id)}
                                                    />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <label
                                                            htmlFor={batch.id}
                                                            className="text-sm font-medium leading-none cursor-pointer"
                                                        >
                                                            {batch.name}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    )}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)} disabled={saving}>Cancel</Button>
                    <Button onClick={handleSave} disabled={saving}>
                        {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
