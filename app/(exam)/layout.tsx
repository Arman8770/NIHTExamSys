import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ExamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    if (session.user.role === "NONE") {
        redirect("/pending-approval");
    }

    return (
        <div className="min-h-screen bg-muted/20">
            <main className="h-full w-full">
                {children}
            </main>
        </div>
    );
}
