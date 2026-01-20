"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useActionState } from "react"
import { updateProfile } from "@/app/actions/settings"
import { Loader2, User, Mail, Phone, MapPin } from "lucide-react"

// Define the shape of the user data we expect
interface UserData {
    name: string | null
    email: string | null
    phoneNumber: string | null // string because we convert BigInt to string for UI
    city: string | null
    profileUpdateCount: number
}

export function ProfileForm({ user }: { user: UserData }) {
    const [state, action, isPending] = useActionState(updateProfile, null)

    const maxUpdates = 2
    const updatesLeft = Math.max(0, maxUpdates - user.profileUpdateCount)
    const isLimitReached = updatesLeft === 0

    return (
        <form action={action}>
            <Card className="shadow-xl bg-card/50 backdrop-blur-sm border-muted/60 overflow-hidden">
                <CardHeader className="bg-muted/30 border-b border-border/50 pb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <User className="h-6 w-6 text-primary" />
                                Profile Settings
                            </CardTitle>
                            <CardDescription className="text-base mt-2">
                                Update your personal information.
                            </CardDescription>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold border ${isLimitReached ? "bg-destructive/10 text-destructive border-destructive/20" : "bg-primary/10 text-primary border-primary/20"}`}>
                            {isLimitReached ? "No updates remaining" : `Updates remaining: ${updatesLeft}`}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                    {state?.error && (
                        <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg flex items-center justify-between animate-in fade-in slide-in-from-top-2">
                            <span>{state.error}</span>
                        </div>
                    )}
                    {state?.success && (
                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm rounded-lg flex items-center justify-between animate-in fade-in slide-in-from-top-2">
                            <span>{state.success}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="name"
                                    name="name"
                                    defaultValue={user.name || ""}
                                    placeholder="Your Name"
                                    className="pl-9 h-11 bg-background/50 focus:bg-background transition-colors"
                                    required
                                    disabled={isLimitReached}
                                />
                            </div>
                            <p className="text-xs text-muted-foreground ml-1">
                                This is your public display name.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    defaultValue={user.email || ""}
                                    disabled
                                    className="pl-9 h-11 bg-muted/50 cursor-not-allowed opacity-70"
                                />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-amber-600/80 bg-amber-500/10 p-2 rounded-md">
                                <span className="font-semibold">Note:</span>
                                Email address can strictly not be changed.
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="phoneNumber" className="text-base font-medium">Phone Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    defaultValue={user.phoneNumber || ""}
                                    placeholder="1234567890"
                                    className="pl-9 h-11 bg-background/50 focus:bg-background transition-colors"
                                    disabled={isLimitReached}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="city" className="text-base font-medium">City</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="city"
                                    name="city"
                                    defaultValue={user.city || ""}
                                    placeholder="City Name"
                                    className="pl-9 h-11 bg-background/50 focus:bg-background transition-colors"
                                    disabled={isLimitReached}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex justify-end">
                        <Button type="submit" size="lg" disabled={isPending || isLimitReached} className="w-full md:w-auto min-w-[140px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                                </>
                            ) : isLimitReached ? (
                                "Update Limit Reached"
                            ) : (
                                "Save Changes"
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
