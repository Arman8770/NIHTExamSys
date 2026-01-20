"use client"

import { useState, useTransition, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Lock, CheckCircle2 } from "lucide-react"
import { resetPasswordAction } from "@/app/actions/forgot-password"

function ResetPasswordForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get("email") || ""
    const otp = searchParams.get("otp") || ""

    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        const formData = new FormData(e.currentTarget)
        const password = formData.get("password") as string
        const confirmPassword = formData.get("confirmPassword") as string

        if (!password || password.length < 6) {
            setError("Password must be at least 6 characters long")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        startTransition(async () => {
            const result = await resetPasswordAction(email, otp, password)
            if (result.error) {
                setError(result.error)
            } else {
                setSuccess(true)
                setTimeout(() => {
                    router.push("/login")
                }, 3000)
            }
        })
    }

    if (success) {
        return (
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-8 rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm text-center">
                <div className="mx-auto bg-emerald-100 p-3 rounded-full w-fit mb-2 animate-bounce">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-primary">
                    Success!
                </h1>
                <p className="text-sm text-muted-foreground">
                    Your password has been reset successfully. Redirecting you to login...
                </p>
                <Button onClick={() => router.push("/login")} className="h-11 shadow-lg shadow-primary/25">
                    Go to Login Now
                </Button>
            </div>
        )
    }

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-8 rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col space-y-2 text-center mb-4">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                    <Lock className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-primary">
                    New Password
                </h1>
                <p className="text-sm text-muted-foreground">
                    Please enter a strong new password for <span className="font-semibold text-foreground">{email}</span>
                </p>
            </div>

            <div className="grid gap-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-5">
                        {error && (
                            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-lg flex items-center justify-center animate-in fade-in slide-in-from-top-2">
                                {error}
                            </div>
                        )}
                        <div className="grid gap-2">
                            <Label htmlFor="password">New Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                disabled={isPending}
                                className="h-11 bg-background/80"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                disabled={isPending}
                                className="h-11 bg-background/80"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <Button disabled={isPending} className="h-11 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mt-2">
                            {isPending && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Reset Password
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default function ResetPage() {
    return (
        <div className="container relative min-h-screen flex items-center justify-center bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-indigo-500/5 -z-10" />
            <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
                <ResetPasswordForm />
            </Suspense>
        </div>
    )
}
