"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Clock, LogOut, CheckCircle2 } from "lucide-react"
import { signOut } from "next-auth/react"

export default function PendingApprovalPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
            <Card className="max-w-md w-full shadow-xl border-t-4 border-t-amber-500">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                        <Clock className="h-8 w-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Approval Pending</CardTitle>
                    <CardDescription className="text-base">
                        Your account has been created successfully.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                    <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                        <p>
                            We have received your request. An administrator needs to verify your details and approve your account before you can access the dashboard.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-center gap-2 text-sm text-emerald-600 font-medium pb-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Registered Successfully
                        </div>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => signOut({ callbackUrl: "/login" })}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
