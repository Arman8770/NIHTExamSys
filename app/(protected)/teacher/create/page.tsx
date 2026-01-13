import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { CreateExamForm } from "@/components/CreateExamForm"

export default async function CreateExamPage() {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") redirect("/")

    return (
        <div className="container mx-auto py-10 max-w-2xl">
            <h1 className="text-2xl font-bold mb-6">Create New Exam</h1>
            <CreateExamForm />
        </div>
    )
}
