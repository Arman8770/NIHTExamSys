"use client"

import { useTransition, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Command, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        if (!email || !password) {
            setError("Please fill in all fields")
            return
        }

        startTransition(async () => {
            try {
                const res = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                })

                if (res?.error) {
                    setError("Invalid email or password")
                    return
                }

                if (res?.ok) {
                    router.push("/dashboard")
                    router.refresh()
                }
            } catch (err) {
                setError("Something went wrong. Please try again.")
            }
        })
    }

    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            {/* Left Side - Hero/Testimonial */}
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-indigo-800" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />

                <div className="relative z-20 flex items-center text-xl font-bold tracking-tight">
                    <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm mr-3">
                        <Command className="h-6 w-6" />
                    </div>
                    ExamSys Inc
                </div>

                <div className="relative z-20 mt-auto max-w-lg">
                    <blockquote className="space-y-4">
                        <p className="text-2xl font-medium leading-relaxed">
                            &ldquo;This platform has completely transformed our assessment process. The security and analytics are world-class.&rdquo;
                        </p>
                        <footer className="text-sm border-l-2 border-white/30 pl-4 py-1">
                            <div className="font-semibold">Sofia Davis</div>
                            <div className="text-white/60">Director of Education, Acme University</div>
                        </footer>
                    </blockquote>
                    <div className="mt-8 flex gap-4 text-sm text-blue-100">
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Secure
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Fast
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Reliable
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:p-8 flex items-center justify-center min-h-screen bg-background">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] p-8 rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm">
                    <div className="flex flex-col space-y-2 text-center mb-4">
                        <h1 className="text-3xl font-bold tracking-tight text-primary">
                            Welcome back
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your credentials to access your secure dashboard
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
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <span className="text-xs text-primary hover:underline cursor-pointer">Forgot password?</span>
                                    </div>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        disabled={isPending}
                                        className="h-11 bg-background/80"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <Button disabled={isPending} className="h-11 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mt-2">
                                    {isPending && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Sign In with Email
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <button
                            onClick={() => router.push("/signup")}
                            className="font-semibold text-primary underline underline-offset-4 hover:text-blue-700 cursor-pointer transition-colors"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
