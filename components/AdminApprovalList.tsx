"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { approveResult } from "@/app/actions/exam"
import { useState, useMemo } from "react"
import { Check, CheckCircle2, ShieldCheck, CalendarX2 } from "lucide-react"
import { DatePicker } from "./DatePicker"
import { format, isSameDay } from "date-fns"

interface PendingResult {
    id: string
    exam: { title: string }
    student: { name: string, email: string }
    score: number
    createdAt: Date
    teacherApproval: boolean
}

export function AdminApprovalList({ results }: { results: PendingResult[] }) {
    const [approvedIds, setApprovedIds] = useState<Set<string>>(new Set())
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    const filteredResults = useMemo(() => {
        return results.filter(result => {
            // Already approved items are handled in the render map (or could be here)
            if (approvedIds.has(result.id)) return false

            if (!selectedDate) return true

            return isSameDay(new Date(result.createdAt), selectedDate)
        })
    }, [results, approvedIds, selectedDate])

    const handleApprove = async (id: string) => {
        const res = await approveResult(id)
        if (res.success) {
            setApprovedIds(prev => new Set(prev).add(id))
        } else {
            alert("Failed to approve")
        }
    }

    if (results.length === 0) return null

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">Pending Admin Approvals</h2>
                    <p className="text-slate-500 text-sm">Review and authorize student certificates.</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-600">Filter by Date:</span>
                    <DatePicker date={selectedDate} setDate={setSelectedDate} />
                </div>
            </div>

            {filteredResults.length === 0 ? (
                <div className="text-center py-20 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
                    <CalendarX2 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600">No results found</h3>
                    <p className="text-slate-400 max-w-xs mx-auto mt-2">
                        {selectedDate
                            ? `There are no pending approvals for ${format(selectedDate, "PPP")}.`
                            : "All pending certificates have been processed."}
                    </p>
                    {selectedDate && (
                        <Button
                            variant="link"
                            onClick={() => setSelectedDate(undefined)}
                            className="mt-4 text-primary hover:text-primary/80"
                        >
                            Clear date filter
                        </Button>
                    )}
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredResults.map(result => (
                        <Card key={result.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl bg-white">
                            <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-indigo-600" />
                            <CardHeader className="pb-2 pt-6">
                                <CardTitle className="text-xl font-bold text-slate-800">{result.student.name}</CardTitle>
                                <CardDescription className="text-slate-500 font-medium">{result.student.email}</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="space-y-4 text-sm text-slate-600 mb-6">
                                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                                        <span className="font-medium text-slate-400 uppercase text-[10px] tracking-wider">Exam</span>
                                        <span className="font-bold text-slate-700">{result.exam.title}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                                        <span className="font-medium text-slate-400 uppercase text-[10px] tracking-wider">Score</span>
                                        <span className="text-lg font-black text-primary">{result.score}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                                        <span className="font-medium text-slate-400 uppercase text-[10px] tracking-wider">Date</span>
                                        <span className="font-semibold text-slate-600">{format(new Date(result.createdAt), "PP")}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                                        <span className="font-medium text-slate-400 uppercase text-[10px] tracking-wider">Teacher Approval</span>
                                        {result.teacherApproval ? (
                                            <span className="inline-flex items-center text-[11px] font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full shadow-sm shadow-emerald-200/50">
                                                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> APPROVED
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center text-[11px] font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-full shadow-sm shadow-amber-200/50">
                                                PENDING
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <Button
                                    onClick={() => handleApprove(result.id)}
                                    className="w-full h-12 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg shadow-slate-200 transition-all active:scale-[0.98]"
                                >
                                    <ShieldCheck className="mr-2 h-5 w-5" /> Approve Certificate
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
            {results.every(r => approvedIds.has(r.id)) && filteredResults.length > 0 && (
                <div className="text-center py-16 bg-emerald-50/50 rounded-3xl border-2 border-dashed border-emerald-200">
                    <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4 drop-shadow-sm" />
                    <h3 className="text-2xl font-bold text-emerald-800">Complete!</h3>
                    <p className="text-emerald-600 font-medium">All pending certificates have been approved.</p>
                </div>
            )}
        </div>
    )
}
