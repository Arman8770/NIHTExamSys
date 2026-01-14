"use client"

import { useState, useEffect } from "react"
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
import { getAllStudents, assignExamToStudents, getExamAssignments } from "@/app/actions/exam"

interface AssignExamModalProps {
    examId: string
    examTitle: string
}

export function AssignExamModal({ examId, examTitle }: AssignExamModalProps) {
    const [open, setOpen] = useState(false)
    const [students, setStudents] = useState<{ id: string, name: string, email: string }[]>([])
    const [selectedStudents, setSelectedStudents] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (open) {
            loadData()
        }
    }, [open])

    const loadData = async () => {
        setLoading(true)
        try {
            const [studentsRes, assignmentsRes] = await Promise.all([
                getAllStudents(),
                getExamAssignments(examId)
            ])

            if (studentsRes.students) {
                setStudents(studentsRes.students)
            }
            if (assignmentsRes.assignedIds) {
                setSelectedStudents(assignmentsRes.assignedIds)
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

    const handleSave = async () => {
        setSaving(true)
        try {
            const res = await assignExamToStudents(examId, selectedStudents)
            if (res.success) {
                setOpen(false)
                alert("Students assigned successfully")
            } else {
                alert("Failed to assign students")
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
                        Select students who are allowed to take this exam.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    {loading ? (
                        <div className="flex justify-center p-4">
                            <Loader2 className="h-6 w-6 animate-spin" />
                        </div>
                    ) : (
                        <ScrollArea className="h-[300px] rounded-md border p-4">
                            <div className="space-y-4">
                                {students.length === 0 ? (
                                    <p className="text-sm text-muted-foreground text-center">No students found.</p>
                                ) : (
                                    students.map(student => (
                                        <div key={student.id} className="flex items-start space-x-3 space-y-0">
                                            <Checkbox
                                                id={student.id}
                                                checked={selectedStudents.includes(student.id)}
                                                onCheckedChange={() => handleToggleStudent(student.id)}
                                            />
                                            <div className="grid gap-1.5 leading-none">
                                                <label
                                                    htmlFor={student.id}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                >
                                                    {student.name}
                                                </label>
                                                <p className="text-xs text-muted-foreground">
                                                    {student.email}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </ScrollArea>
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
