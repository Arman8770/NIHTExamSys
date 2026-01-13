import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    const role = session.user.role

    if (role === "ADMIN") {
        redirect("/admin")
    } else if (role === "TEACHER") {
        redirect("/teacher")
    } else {
        redirect("/student")
    }
}
