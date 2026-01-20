"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Command, ArrowLeft, Mail } from "lucide-react"
import { sendOTPAction } from "@/app/actions/forgot-password"

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string

        if (!email) {
            setError("Please enter your email address")
            return
        }

        startTransition(async () => {
            const result = await sendOTPAction(email)
            if (result.error) {
                setError(result.error)
            } else {
                // Success: Redirect to verify page with email in query
                router.push(`/forgot-password/verify?email=${encodeURIComponent(email)}`)
            }
        })
    }

    return (
        <div className="container relative min-h-screen flex items-center justify-center bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-indigo-500/5 -z-10" />

            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-8 rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm">
                <div className="flex flex-col space-y-2 text-center mb-4">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">
                        Forgot Password
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email address and we'll send you an OTP to reset your password
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
                                <Label htmlFor="email" className="font-medium">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={isPending}
                                    className="h-11 bg-background/80"
                                    required
                                />
                            </div>
                            <Button disabled={isPending} className="h-11 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mt-2">
                                {isPending && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Send OTP
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => router.push("/login")}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    )
}
