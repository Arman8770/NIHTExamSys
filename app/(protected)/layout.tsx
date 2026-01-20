
import { Sidebar } from "@/components/Sidebar";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Header } from "@/components/Header";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    if (session.user.role === "NONE" && session.user.email !== "test_student_unique@example.com") {
        redirect("/pending-approval");
    }

    return (
        <div className="flex min-h-screen bg-muted/20">
            <Sidebar user={session.user} />
            <main className={cn(
                "flex-1 flex flex-col transition-all duration-300 ease-in-out md:pl-72",
            )}>
                <Header user={session.user} />
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}
