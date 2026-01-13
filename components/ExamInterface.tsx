"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { submitExam } from "@/app/actions/exam"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Timer, AlertCircle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
    id: string
    text: string
    options: string[]
}

interface ExamInterfaceProps {
    examId: string
    title: string
    timeLimitMinutes: number
    questions: Question[]
}

export function ExamInterface({ examId, title, timeLimitMinutes, questions }: ExamInterfaceProps) {
    const router = useRouter()
    const [timeLeft, setTimeLeft] = useState(timeLimitMinutes * 60)
    const [answers, setAnswers] = useState<Record<string, number>>({})
    const [submitting, setSubmitting] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [isStarted, setIsStarted] = useState(false)

    useEffect(() => {
        if (!isStarted) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    handleSubmit()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isStarted])

    const handleStart = async () => {
        try {
            if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen()
            }
            setIsStarted(true)
        } catch (error) {
            console.error("Failed to enter fullscreen:", error)
            // Still start the exam even if fullscreen fails
            setIsStarted(true)
        }
    }


    const handleSubmit = async () => {
        if (submitting) return
        setSubmitting(true)

        try {
            const timeTaken = (timeLimitMinutes * 60) - timeLeft
            console.log("Submitting with answers:", answers)
            const res = await submitExam(examId, answers, timeTaken)

            if (res?.error) {
                alert(res.error)
                setSubmitting(false)
                return
            }

            // Redirect to results immediately
            router.push(`/student/results/${examId}`)
            router.refresh()
        } catch (error) {
            console.error("Submission error:", error)
            alert("Submission failed. Please try again.")
            setSubmitting(false)
        }
    }

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
        const s = seconds % 60
        return `${m}:${s < 10 ? '0' : ''}${s}`
    }

    const progress = (Object.keys(answers).length / questions.length) * 100
    const currentQuestion = questions[currentQuestionIndex]

    if (!isStarted) {
        return (
            <div className="max-w-2xl mx-auto py-20 px-4">
                <Card className="border-none shadow-2xl bg-gradient-to-br from-background to-muted/50 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                    <CardHeader className="text-center pt-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                            <Timer className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl font-extrabold tracking-tight">{title}</CardTitle>
                        <CardDescription className="text-lg mt-2 font-medium">
                            Ready to begin your assessment?
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 px-10 pb-12">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-muted/30 border space-y-1">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Duration</p>
                                <p className="text-xl font-bold">{timeLimitMinutes} Minutes</p>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/30 border space-y-1">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Questions</p>
                                <p className="text-xl font-bold">{questions.length} Items</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-primary" />
                                Important Rules:
                            </h4>
                            <ul className="grid gap-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    Exam will automatically enter full-screen mode.
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    Once started, the timer cannot be paused.
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    Submission will be automatic when time expires.
                                </li>
                            </ul>
                        </div>

                        <Button
                            onClick={handleStart}
                            size="lg"
                            className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl"
                        >
                            Start Exam Now
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
            {/* Header / StatusBar */}
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur py-4 border-b">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold truncate tracking-tight">{title}</h2>
                            <p className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {questions.length}</p>
                        </div>
                        <div className={cn(
                            "flex items-center gap-2 font-mono text-xl font-bold px-4 py-2 rounded-md bg-muted",
                            timeLeft < 60 && "text-destructive bg-destructive/10"
                        )}>
                            <Timer className="w-5 h-5" />
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>
            </div>

            {/* Question Card */}
            <Card className="min-h-[400px] flex flex-col">
                <CardHeader>
                    <CardTitle className="leading-relaxed text-lg">
                        {currentQuestion.text}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <RadioGroup
                        onValueChange={(val) => {
                            setAnswers(prev => ({ ...prev, [currentQuestion.id]: parseInt(val) }))
                        }}
                        value={answers[currentQuestion.id]?.toString()}
                        className="space-y-4"
                    >
                        {currentQuestion.options.map((opt, oIndex) => (
                            <div key={oIndex} className={cn(
                                "flex items-center space-x-3 space-y-0 rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer",
                                answers[currentQuestion.id] === oIndex && "bg-primary/5 border-primary"
                            )}
                                onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: oIndex }))}
                            >
                                <RadioGroupItem value={oIndex.toString()} id={`${currentQuestion.id}-${oIndex}`} />
                                <Label htmlFor={`${currentQuestion.id}-${oIndex}`} className="flex-1 cursor-pointer font-normal text-base">
                                    {opt}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4">
                <Button
                    variant="outline"
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                    <Button onClick={handleSubmit} disabled={submitting} size="lg" className="w-[150px]">
                        {submitting ? "Submitting..." : "Submit Exam"}
                    </Button>
                ) : (
                    <Button
                        onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                    >
                        Next Question
                    </Button>
                )}
            </div>

            {/* Quick Navigation Grid (Optional but helpful) */}
            <div className="pt-8">
                <p className="text-sm font-medium mb-3">Question Navigator</p>
                <div className="flex flex-wrap gap-2">
                    {questions.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentQuestionIndex(idx)}
                            className={cn(
                                "w-10 h-10 rounded-md text-sm font-medium transition-colors border",
                                currentQuestionIndex === idx ? "bg-primary text-primary-foreground border-primary" :
                                    answers[questions[idx].id] !== undefined ? "bg-muted text-muted-foreground border-transparent" : "bg-background text-muted-foreground hover:bg-muted"
                            )}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
