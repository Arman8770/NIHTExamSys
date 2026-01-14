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


export async function getStudentsAndRequests(
    page: number = 1,
    pageSize: number = 10,
    query: string = "",
    status: "ALL" | "PENDING" | "APPROVED" = "PENDING",
    startDate?: string,
    endDate?: string
) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") {
        return { error: "Unauthorized" }
    }

    try {
        const whereClause: any = {
            AND: [
                {
                    OR: [
                        { name: { contains: query } },
                        { email: { contains: query } },
                        { city: { contains: query } },
                    ]
                }
            ]
        }

        if (/^\d+$/.test(query)) {
            whereClause.AND[0].OR.push({ phoneNumber: BigInt(query) })
        }

        if (status === "PENDING") {
            whereClause.role = "NONE"
        } else if (status === "APPROVED") {
            whereClause.role = "STUDENT"
        } else {
            whereClause.role = { in: ["NONE", "STUDENT"] }
        }

        // Date Filtering
        if (startDate || endDate) {
            whereClause.createdAt = {}
            if (startDate) {
                whereClause.createdAt.gte = new Date(startDate)
            }
            if (endDate) {
                const end = new Date(endDate)
                end.setHours(23, 59, 59, 999)
                whereClause.createdAt.lte = end
            }
        }

        const [users, total] = await Promise.all([
            db.user.findMany({
                where: whereClause,
                skip: (page - 1) * pageSize,
                take: pageSize,
                orderBy: { name: "asc" },
            }),
            db.user.count({ where: whereClause })
        ])

        const plainUsers = users.map(user => ({
            ...user,
            phoneNumber: user.phoneNumber?.toString() || null
        }))

        return { users: plainUsers, total, totalPages: Math.ceil(total / pageSize) }
    } catch (error) {
        console.error("Fetch error:", error)
        return { error: "Failed to fetch users" }
    }
}

export async function bulkUpdateRole(userIds: string[], newRole: Role) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") return { error: "Unauthorized" }

    // Safety: Teachers only STUDENT
    if (session.user.role === "TEACHER" && newRole !== "STUDENT" && newRole !== "NONE") {
        return { error: "Unauthorized: Teachers can only manage Student roles" }
    }

    try {
        await db.user.updateMany({
            where: { id: { in: userIds } },
            data: { role: newRole }
        })
        revalidatePath("/teacher/students")
        return { success: true }
    } catch (error) {
        return { error: "Failed to update roles" }
    }
}

export async function deleteUsers(userIds: string[]) {
    const session = await auth()
    if (session?.user?.role !== "TEACHER" && session?.user?.role !== "ADMIN") return { error: "Unauthorized" }

    try {
        await db.user.deleteMany({
            where: { id: { in: userIds } }
        })
        revalidatePath("/teacher/students")
        return { success: true }
    } catch (error) {
        return { error: "Failed to delete users" }
    }
}
