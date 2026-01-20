"use server"

import { auth } from "@/lib/auth"
import prisma from "@/lib/db"
import { Role } from "@/types/role"
import { revalidatePath } from "next/cache"

export async function updateUserRole(userId: string, newRole: Role) {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") return { error: "Unauthorized" }

    try {
        await prisma.user.update({
            where: { id: userId },
            data: { role: newRole }
        })
        revalidatePath("/admin")
        return { success: true }
    } catch (error) {
        console.error("Failed to update role:", error)
        return { error: "Failed to update role" }
    }
}

export async function deleteUserAction(userId: string) {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") return { error: "Unauthorized" }

    try {
        await prisma.user.delete({
            where: { id: userId }
        })
        revalidatePath("/admin")
        return { success: true }
    } catch (error) {
        console.error("Failed to delete user:", error)
        return { error: "Failed to delete user" }
    }
}
