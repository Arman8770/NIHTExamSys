import { BatchManagement } from "@/components/BatchManagement"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function TeacherBatchesPage() {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    return (
        <div className="container mx-auto py-8">
            <BatchManagement />
        </div>
    )
}
