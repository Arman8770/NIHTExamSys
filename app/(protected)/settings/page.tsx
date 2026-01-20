import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import prisma from "@/lib/db"
import { ProfileForm } from "@/components/settings/ProfileForm"

export default async function SettingsPage() {
    const session = await auth()
    if (!session || !session.user || !session.user.id) redirect("/login")

    const dbUser = await prisma.user.findUnique({
        where: { id: session.user.id }
    })

    if (!dbUser) redirect("/login")

    const userData = {
        name: dbUser.name,
        email: dbUser.email,
        phoneNumber: dbUser.phoneNumber ? dbUser.phoneNumber.toString() : "",
        city: dbUser.city,
        profileUpdateCount: dbUser.profileUpdateCount
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Settings</h1>
            <ProfileForm user={userData} />
        </div>
    )
}
