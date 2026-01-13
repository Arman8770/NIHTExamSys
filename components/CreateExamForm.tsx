"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createExam } from "@/app/actions/exam"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Save, ArrowLeft, Upload, FileJson } from "lucide-react"
import { bulkUploadQuestions } from "@/app/actions/exam"

export function CreateExamForm() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([
        { text: "", options: ["", "", "", ""], correctAnswerIndex: 0 }
    ])

    const handleAddQuestion = () => {
        setQuestions([...questions, { text: "", options: ["", "", "", ""], correctAnswerIndex: 0 }])
    }

    const handleRemoveQuestion = (index: number) => {
        if (questions.length === 1) {
            setQuestions([{ text: "", options: ["", "", "", ""], correctAnswerIndex: 0 }])
            return
        }
        const newQ = [...questions]
        newQ.splice(index, 1)
        setQuestions(newQ)
    }

    const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = event.target?.result as string
            const res = await bulkUploadQuestions(text)
            if (res.questions) {
                // If the first question is empty, replace it; otherwise, append.
                if (questions.length === 1 && questions[0].text === "" && questions[0].options.every(o => o === "")) {
                    setQuestions(res.questions)
                } else {
                    setQuestions([...questions, ...res.questions])
                }
            } else {
                alert(res.error || "Failed to parse CSV")
            }
        }
        reader.readAsText(file)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)

        const data = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            timeLimit: parseInt(formData.get("timeLimit") as string),
            questions
        }

        try {
            const res = await createExam(data)
            if (res.success) {
                router.push("/teacher")
                router.refresh()
            } else {
                alert(res.error || "Failed to create exam")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8 pb-10">
            <div className="flex items-center gap-4">
                <Button type="button" variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold">Create New Exam</h1>
                    <p className="text-muted-foreground">Define exam details and add questions.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Exam Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Exam Title</Label>
                        <Input id="title" name="title" required placeholder="e.g. Midterm Physics" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" name="description" required placeholder="Brief description of the exam..." />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                        <Input id="timeLimit" name="timeLimit" type="number" min="1" required className="max-w-[150px]" placeholder="60" />
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <div className="flex items-center justify-between sticky top-[70px] z-10 bg-background/95 backdrop-blur py-4 border-b">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        Questions
                        <span className="bg-primary/10 text-primary text-sm px-2 py-0.5 rounded-full">{questions.length}</span>
                    </h3>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleBulkUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                title="Upload questions from CSV"
                            />
                            <Button type="button" variant="outline" size="sm" className="shadow-sm">
                                <Upload className="mr-2 h-4 w-4" /> Bulk Upload (CSV)
                            </Button>
                        </div>
                        <Button type="button" variant="outline" size="sm" onClick={handleAddQuestion} className="shadow-sm border-dashed border-primary/40 hover:border-primary">
                            <Plus className="mr-2 h-4 w-4" /> Add Question
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    {questions.map((q, qIndex) => (
                        <Card key={qIndex} className="relative overflow-hidden group shadow-md hover:shadow-lg transition-all border-l-4 border-l-primary/50">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/10">
                                <CardTitle className="text-base font-semibold text-primary">Question {qIndex + 1}</CardTitle>
                                {questions.length > 1 && (
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                        onClick={() => handleRemoveQuestion(qIndex)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                )}
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="grid gap-2">
                                    <Label className="text-muted-foreground font-medium">Question Text</Label>
                                    <Textarea
                                        value={q.text}
                                        onChange={(e) => {
                                            const newQ = [...questions]
                                            newQ[qIndex].text = e.target.value
                                            setQuestions(newQ)
                                        }}
                                        required
                                        placeholder="Enter your question here..."
                                        className="resize-none min-h-[80px] text-lg font-medium bg-background"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-muted-foreground font-medium flex justify-between">
                                        Answer Options
                                        <span className="text-xs font-normal bg-muted px-2 py-0.5 rounded">Select radio to mark correct</span>
                                    </Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {q.options.map((opt, oIndex) => (
                                            <div key={oIndex} className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${q.correctAnswerIndex === oIndex ? "bg-primary/5 border-primary/50" : "bg-card border-border hover:border-primary/20"}`}>
                                                <div className="flex flex-col items-center gap-1">
                                                    <input
                                                        type="radio"
                                                        name={`correct-${qIndex}`}
                                                        checked={q.correctAnswerIndex === oIndex}
                                                        onChange={() => {
                                                            const newQ = [...questions]
                                                            newQ[qIndex].correctAnswerIndex = oIndex
                                                            setQuestions(newQ)
                                                        }}
                                                        className="accent-primary h-5 w-5 cursor-pointer"
                                                        title="Mark as correct answer"
                                                    />
                                                </div>
                                                <Input
                                                    value={opt}
                                                    onChange={(e) => {
                                                        const newQ = [...questions]
                                                        newQ[qIndex].options[oIndex] = e.target.value
                                                        setQuestions(newQ)
                                                    }}
                                                    required
                                                    placeholder={`Option ${oIndex + 1}`}
                                                    className="border-0 bg-transparent shadow-none focus-visible:ring-0 px-0 h-auto font-medium"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={loading} size="lg" className="w-full md:w-auto">
                    {loading ? "Creating..." : (
                        <>
                            <Save className="mr-2 h-4 w-4" /> Save Exam
                        </>
                    )}
                </Button>
            </div>
        </form>
    )
}
