"use client"

import { useState } from "react"
import { deleteExam } from "@/app/actions/exam"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function DeleteExamButton({ examId }: { examId: string }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this exam? This action cannot be undone.")) return

        setIsDeleting(true)
        try {
            const res = await deleteExam(examId)
            if (res.error) {
                alert(res.error)
            } else {
                router.refresh()
            }
        } catch (error) {
            console.error(error)
            alert("Failed to delete exam")
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-destructive hover:bg-destructive/10"
        >
            <Trash2 className="h-4 w-4" />
        </Button>
    )
}
