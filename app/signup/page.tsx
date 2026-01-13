"use client"

import { useTransition, useState } from "react"
import { useRouter } from "next/navigation"
import { signup } from "@/app/actions/signup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Command, CheckCircle2 } from "lucide-react"

export default function SignupPage() {
    const router = useRouter()
    const [error, setError] = useState<Record<string, string[]>>({})
    const [message, setMessage] = useState("")
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError({})
        setMessage("")

        const formData = new FormData(e.currentTarget)

        startTransition(async () => {
            try {
                const res = await signup(formData)

                if (res?.error) {
                    setError(res.error)
                    return
                }

                if (res?.success) {
                    setMessage(res.success)
                    setTimeout(() => router.push("/login"), 3000)
                }
            } catch (err) {
                setError({ server: ["Something went wrong. Please try again."] })
            }
        })
    }

    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            {/* Left Side - Hero/Testimonial (Same as Login) */}
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
                            &ldquo;Join our community and experience the future of digital examinations today.&rdquo;
                        </p>
                        <footer className="text-sm border-l-2 border-white/30 pl-4 py-1">
                            <div className="font-semibold">Join Thousands of Educators</div>
                            <div className="text-white/60">Start your journey with ExamSys</div>
                        </footer>
                    </blockquote>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="lg:p-8 flex items-center justify-center min-h-screen bg-background">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px] p-8 rounded-2xl border bg-card/50 shadow-xl backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-col space-y-2 text-center mb-4">
                        <h1 className="text-3xl font-bold tracking-tight text-primary">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your details to register for an account
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                {(error.server || message) && (
                                    <div className={`${message ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-destructive/10 border-destructive/20 text-destructive"} border text-sm p-3 rounded-lg flex items-center justify-center animate-in fade-in slide-in-from-top-2`}>
                                        {message || error.server[0]}
                                    </div>
                                )}
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        disabled={isPending}
                                        className="h-10 bg-background/80"
                                    />
                                    {error.name && <p className="text-xs text-destructive">{error.name[0]}</p>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        disabled={isPending}
                                        className="h-10 bg-background/80"
                                    />
                                    {error.email && <p className="text-xs text-destructive">{error.email[0]}</p>}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="phoneNumber">Phone Number</Label>
                                        <Input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="1234567890"
                                            type="tel"
                                            disabled={isPending}
                                            className="h-10 bg-background/80"
                                        />
                                        {error.phoneNumber && <p className="text-xs text-destructive">{error.phoneNumber[0]}</p>}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            placeholder="Your City"
                                            type="text"
                                            disabled={isPending}
                                            className="h-10 bg-background/80"
                                        />
                                        {error.city && <p className="text-xs text-destructive">{error.city[0]}</p>}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        disabled={isPending}
                                        className="h-10 bg-background/80"
                                        placeholder="••••••••"
                                    />
                                    {error.password && <p className="text-xs text-destructive">{error.password[0]}</p>}
                                </div>
                                <Button disabled={isPending} className="h-11 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mt-2">
                                    {isPending && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Create Account
                                </Button>
                            </div>
                        </form>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <button
                            onClick={() => router.push("/login")}
                            className="font-semibold text-primary underline underline-offset-4 hover:text-blue-700 cursor-pointer transition-colors"
                        >
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
