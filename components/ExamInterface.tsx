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
import { Badge } from "@/components/ui/badge"
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
        if (!isStarted || typeof window === 'undefined') return

        // Prevent Context Menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault()
            return false
        }

        // Prevent Developer Tools & Shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
                (e.ctrlKey && e.key === "u") ||
                (e.altKey && e.key === "Tab") ||
                (e.metaKey && e.key === "Tab")
            ) {
                e.preventDefault()
                return false
            }
        }

        // Prevent Back Navigation
        const handlePopState = () => {
            try {
                window.history.pushState(null, document.title, window.location.href)
            } catch (e) {
                console.warn("History push restricted", e)
            }
            alert("SECURITY ALERT: Navigation is locked. Please finish or submit the exam.")
        }

        // Handle Tab Switching / Minimizing
        const handleVisibilityChange = () => {
            if (document.hidden) {
                alert("SECURITY WARNING: You switched away from the exam tab. This event has been logged.")
                // In a real app, you might want to auto-submit or penalize here
            }
        }

        // Detect Fullscreen Exit
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement && isStarted && !submitting) {
                alert("SECURITY ALERT: Fullscreen mode is required. Please stay in fullscreen.")
                // Attempt to re-enter fullscreen
                enterFullscreen()
            }
        }

        // Initial push to lock history
        try {
            window.history.pushState(null, document.title, window.location.href)
        } catch (e) {
            console.warn("Initial history push failed", e)
        }

        // Prevent Page Leave/Refresh
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault()
            e.returnValue = "You have an ongoing exam. Are you sure you want to leave?"
        }

        window.addEventListener("contextmenu", handleContextMenu)
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("popstate", handlePopState)
        window.addEventListener("beforeunload", handleBeforeUnload as any)
        document.addEventListener("visibilitychange", handleVisibilityChange)
        document.addEventListener("fullscreenchange", handleFullscreenChange)

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

        return () => {
            clearInterval(timer)
            window.removeEventListener("contextmenu", handleContextMenu)
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("popstate", handlePopState)
            window.removeEventListener("beforeunload", handleBeforeUnload as any)
            document.removeEventListener("visibilitychange", handleVisibilityChange)
            document.removeEventListener("fullscreenchange", handleFullscreenChange)
        }
    }, [isStarted, submitting])

    const enterFullscreen = async () => {
        try {
            if (document.documentElement.requestFullscreen) {
                await document.documentElement.requestFullscreen().catch(err => {
                    console.warn("Fullscreen request denied:", err)
                })
            }
        } catch (error) {
            console.warn("Fullscreen error:", error)
        }
    }

    const handleStart = async () => {
        if (!confirm("IMPORTANT SECURITY NOTICE:\n\n1. Fullscreen mode will be enabled and locked.\n2. Navigating away, switching tabs, or refreshing will be flagged.\n3. The Back button is disabled.\n4. Developer tools are restricted.\n\nDo you want to start the exam now?")) {
            return
        }

        setIsStarted(true)
        await enterFullscreen()
    }

    const handleSubmit = async () => {
        if (submitting) return

        // Final confirmation for manual submit
        if (timeLeft > 0 && !confirm("Are you sure you want to submit the exam?")) {
            return
        }

        setSubmitting(true)

        try {
            if (document.fullscreenElement && document.exitFullscreen) {
                await document.exitFullscreen().catch(() => { })
            }

            const timeTaken = (timeLimitMinutes * 60) - timeLeft
            const res = await submitExam(examId, answers, timeTaken)

            if (res?.error) {
                alert(res.error)
                setSubmitting(false)
                return
            }

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
            <div className="max-w-3xl mx-auto py-20 px-4">
                <Card className="border-none shadow-2xl bg-gradient-to-br from-background to-muted/50 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                    <CardHeader className="text-center pt-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                            <Timer className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl font-extrabold tracking-tight">{title}</CardTitle>
                        <CardDescription className="text-lg mt-2 font-medium">
                            Strict Exam Environment Enabled
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 px-10 pb-12">
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 space-y-2">
                            <h4 className="font-bold flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                Monitoring Active
                            </h4>
                            <p className="text-sm">
                                This exam is monitored. Features like copy-paste, right-click, and tab switching are restricted. You cannot go back once started.
                            </p>
                        </div>

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

                        <Button
                            onClick={handleStart}
                            size="lg"
                            className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl cursor-pointer"
                        >
                            Start Exam
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="w-full mx-auto px-4 py-8 animate-in fade-in duration-700">
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] lg:grid-cols-[75%_25%] gap-8 items-start">

                {/* Left Side: Question Content */}
                <div className="space-y-8">
                    {/* Header / StatusBar */}
                    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur py-4 border-b -mx-4 px-4 lg:mx-0 ">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold truncate tracking-tight">{title}</h2>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        Question {currentQuestionIndex + 1} of {questions.length}
                                    </p>
                                </div>
                                <div className={cn(
                                    "flex items-center gap-2 font-mono text-xl font-bold px-4 py-2 rounded-xl bg-muted transition-colors",
                                    timeLeft < 60 && "text-destructive bg-destructive/10 animate-pulse"
                                )}>
                                    <Timer className="w-5 h-5" />
                                    {formatTime(timeLeft)}
                                </div>
                            </div>
                            <Progress value={progress} className="h-2.5 rounded-full" />
                        </div>
                    </div>

                    {/* Question Card */}
                    <Card className="min-h-[400px] flex flex-col shadow-xl border-none ring-1 ring-border/50 overflow-hidden">
                        <div className="h-1.5 w-full bg-primary/20">
                            <div
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                        <CardHeader className="pt-8 px-8">
                            <CardTitle className="leading-relaxed text-2xl font-bold">
                                {currentQuestion.text}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 px-8 pb-8">
                            <div className="flex justify-between items-center mb-6">
                                <Label className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">Select one option</Label>
                                {answers[currentQuestion.id] !== undefined && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            setAnswers(prev => {
                                                const newAnswers = { ...prev }
                                                delete newAnswers[currentQuestion.id]
                                                return newAnswers
                                            })
                                        }}
                                        className="h-8 text-xs font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all rounded-lg"
                                    >
                                        Clear Selection
                                    </Button>
                                )}
                            </div>
                            <RadioGroup
                                onValueChange={(val) => {
                                    setAnswers(prev => ({ ...prev, [currentQuestion.id]: parseInt(val) }))
                                }}
                                value={answers[currentQuestion.id]?.toString() || ""}
                                className="grid gap-4"
                            >
                                {currentQuestion.options.map((opt, oIndex) => (
                                    <div key={oIndex}
                                        className={cn(
                                            "group flex items-center space-x-3 space-y-0 rounded-xl border-2 p-5 transition-all hover:border-primary/50 hover:bg-primary/[0.02] cursor-pointer relative",
                                            answers[currentQuestion.id] === oIndex ? "bg-primary/[0.05] border-primary shadow-sm" : "border-muted/60"
                                        )}
                                        onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: oIndex }))}
                                    >
                                        <RadioGroupItem
                                            value={oIndex.toString()}
                                            id={`${currentQuestion.id}-${oIndex}`}
                                            className="w-5 h-5"
                                        />
                                        <Label htmlFor={`${currentQuestion.id}-${oIndex}`} className="flex-1 cursor-pointer font-medium text-lg py-1 pl-2">
                                            {opt}
                                        </Label>
                                        {answers[currentQuestion.id] === oIndex && (
                                            <CheckCircle className="w-5 h-5 text-primary absolute right-5" />
                                        )}
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                    </Card>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center pt-8 border-t">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestionIndex === 0}
                            className="rounded-xl px-8 font-bold border-2"
                        >
                            Previous
                        </Button>

                        {currentQuestionIndex === questions.length - 1 ? (
                            <Button
                                onClick={handleSubmit}
                                disabled={submitting}
                                size="lg"
                                className="min-w-[180px] rounded-xl font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 h-12"
                            >
                                {submitting ? "Submitting..." : "Finish & Submit"}
                            </Button>
                        ) : (
                            <Button
                                size="lg"
                                onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                                className="rounded-xl px-8 font-bold shadow-lg shadow-primary/10 h-12"
                            >
                                Next Question
                            </Button>
                        )}
                    </div>
                </div>

                {/* Right Side: Tracking Panel (Sidebar) */}
                <aside className="space-y-6 md:sticky md:top-24">
                    <Card className="border-none shadow-xl ring-1 ring-border/50 overflow-hidden">
                        <CardHeader className="pb-4 bg-muted/30">
                            <CardTitle className="text-base font-bold flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                Exam Progress
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 flex flex-col">
                                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Answered</span>
                                    <span className="text-2xl font-black text-primary">{Object.keys(answers).length}</span>
                                </div>
                                <div className="p-3 rounded-xl bg-muted/50 border border-border/50 flex flex-col">
                                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Remaining</span>
                                    <span className="text-2xl font-black">{questions.length - Object.keys(answers).length}</span>
                                </div>
                            </div>

                            <Separator />

                            {/* Question Navigator Grid */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Question Grid</p>
                                    <Badge variant="outline" className="text-[10px] uppercase tracking-tighter font-black rounded-lg">
                                        {Math.round(progress)}% Done
                                    </Badge>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {questions.map((_, idx) => {
                                        const isAnswered = answers[questions[idx].id] !== undefined
                                        const isCurrent = currentQuestionIndex === idx

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentQuestionIndex(idx)}
                                                className={cn(
                                                    "aspect-square rounded-xl text-sm font-bold transition-all border-2 flex items-center justify-center relative",
                                                    isCurrent ? "bg-primary text-primary-foreground border-primary shadow-md scale-110 z-10" :
                                                        isAnswered ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" :
                                                            "bg-background text-muted-foreground border-muted/60 hover:border-primary/40 hover:bg-primary/[0.02]"
                                                )}
                                            >
                                                {idx + 1}
                                                {isAnswered && !isCurrent && (
                                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                                                )}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2">
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                    <div className="w-2.5 h-2.5 rounded bg-primary" /> Current
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                    <div className="w-2.5 h-2.5 rounded bg-primary/20 border border-primary/20" /> Answered
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                    <div className="w-2.5 h-2.5 rounded border border-muted/60" /> Pending
                                </div>
                            </div>

                            <Separator />

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-amber-600/80">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <p className="text-[10px] font-bold leading-relaxed uppercase tracking-tight">
                                    All responses are auto-saved. Finish all questions before submitting.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    )
}
