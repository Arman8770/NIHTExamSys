"use client"

import { useState, useTransition, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ShieldCheck, ArrowLeft } from "lucide-react"
import { verifyOTPAction } from "@/app/actions/forgot-password"

function VerifyOTPForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get("email") || ""

    const [error, setError] = useState("")
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        const formData = new FormData(e.currentTarget)
        const otp = formData.get("otp") as string

        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP")
            return
        }

        startTransition(async () => {
            const result = await verifyOTPAction(email, otp)
            if (result.error) {
                setError(result.error)
            } else {
                router.push(`/forgot-password/reset?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`)
            }
        })
    }

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-8 rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col space-y-2 text-center mb-4">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-primary">
                    Verify OTP
                </h1>
                <p className="text-sm text-muted-foreground">
                    We've sent a 6-digit code to <span className="font-semibold text-foreground">{email}</span>
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
                        <div className="grid gap-2 text-center">
                            <Label htmlFor="otp" className="font-medium">Enter OTP Code</Label>
                            <Input
                                id="otp"
                                name="otp"
                                placeholder="000000"
                                type="text"
                                maxLength={6}
                                pattern="\d{6}"
                                disabled={isPending}
                                className="h-14 text-center text-2xl tracking-[1em] font-bold bg-background/80"
                                required
                                autoFocus
                            />
                        </div>
                        <Button disabled={isPending} className="h-11 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mt-2">
                            {isPending && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Verify OTP
                        </Button>
                    </div>
                </form>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Change Email
                </button>
            </div>
        </div>
    )
}

export default function VerifyPage() {
    return (
        <div className="container relative min-h-screen flex items-center justify-center bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-indigo-500/5 -z-10" />
            <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
                <VerifyOTPForm />
            </Suspense>
        </div>
    )
}
