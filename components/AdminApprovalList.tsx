"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { approveResult } from "@/app/actions/exam"
import { useState } from "react"
import { Check, CheckCircle2, ShieldCheck } from "lucide-react"

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
        <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Pending Admin Approvals</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {results.map(result => (
                    approvedIds.has(result.id) ? null : (
                        <Card key={result.id} className="border-l-4 border-l-primary">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{result.student.name}</CardTitle>
                                <CardDescription>{result.student.email}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                                    <div className="flex justify-between">
                                        <span>Exam:</span>
                                        <span className="font-medium text-foreground">{result.exam.title}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Score:</span>
                                        <span className="font-medium text-foreground">{result.score}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Teacher Status:</span>
                                        {result.teacherApproval ? (
                                            <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                                <CheckCircle2 className="w-3 h-3 mr-1" /> Approved
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                                                Pending
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <Button
                                    onClick={() => handleApprove(result.id)}
                                    className="w-full"
                                >
                                    <ShieldCheck className="mr-2 h-4 w-4" /> Approve as Admin
                                </Button>
                            </CardContent>
                        </Card>
                    )
                ))}
            </div>
            {results.every(r => approvedIds.has(r.id)) && (
                <div className="text-center py-12 bg-muted/30 rounded-lg border border-dashed">
                    <CheckCircle2 className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-50" />
                    <p className="text-muted-foreground">All pending certificates approved!</p>
                </div>
            )}
        </div>
    )
}
