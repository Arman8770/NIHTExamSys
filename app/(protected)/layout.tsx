
import { Sidebar } from "@/components/Sidebar";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-screen bg-muted/20">
            <Sidebar user={session.user} />
            <main className={cn(
                "flex-1 transition-all duration-300 ease-in-out md:pl-72",
            )}>
                {children}
            </main>
        </div>
    );
}
