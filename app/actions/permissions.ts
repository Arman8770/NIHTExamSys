"use server"

import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { Role } from "@/types/role"
import { revalidatePath } from "next/cache"

export async function updateUserRole(userId: string, newRole: Role) {
    const session = await auth()
    const currentUserRole = session?.user?.role

    if (!session || !session.user) {
        return { error: "Not authenticated" }
    }

    // Role-based permission logic
    if (currentUserRole === "ADMIN") {
        // Admin can assign any role
    } else if (currentUserRole === "TEACHER") {
        // Teacher can only assign STUDENT role
        if (newRole !== "STUDENT") {
            return { error: "Unauthorized: Teachers can only assign STUDENT role" }
        }
    } else {
        return { error: "Unauthorized" }
    }

    try {
        await db.user.update({
            where: { id: userId },
            data: { role: newRole },
        })

        revalidatePath("/admin/users")
        revalidatePath("/teacher/students")
        return { success: "Role updated successfully" }
    } catch (error) {
        console.error("Error updating role:", error)
        return { error: "Failed to update role" }
    }
}

export async function getAllUsers() {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") {
        return { error: "Unauthorized" }
    }

    try {
        const users = await db.user.findMany({
            orderBy: { name: "asc" },
        })
        // Convert BigInt to string for serialization
        const plainUsers = users.map(user => ({
            ...user,
            phoneNumber: user.phoneNumber?.toString() || null
        }))
        return { users: plainUsers }
    } catch (error) {
        return { error: "Failed to fetch users" }
    }
}

export async function getNoneRoleUsers() {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") {
        return { error: "Unauthorized" }
    }

    try {
        const users = await db.user.findMany({
            where: { role: "NONE" },
            orderBy: { name: "asc" },
        })
        // Convert BigInt to string for serialization
        const plainUsers = users.map(user => ({
            ...user,
            phoneNumber: user.phoneNumber?.toString() || null
        }))
        return { users: plainUsers }
    } catch (error) {
        return { error: "Failed to fetch users" }
    }
}
