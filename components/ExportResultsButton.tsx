"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import * as XLSX from "xlsx"

interface ResultData {
    studentName: string
    studentEmail: string
    score: number
    totalScore: number
    completionTime: string
    date: string
}

interface ExportResultsButtonProps {
    results: ResultData[]
    examTitle: string
}

export function ExportResultsButton({ results, examTitle }: ExportResultsButtonProps) {
    const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(results)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "Results")
        XLSX.writeFile(wb, `${examTitle.replace(/\s+/g, '_')}_Results.xlsx`)
    }

    return (
        <Button variant="outline" onClick={handleExport} className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
        </Button>
    )
}
