"use server"

import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function createBatch(data: { name: string, description?: string }) {
    const session = await auth()
    if (session?.user?.role !== "ADMIN" && session?.user?.role !== "TEACHER") {
        return { error: "Unauthorized" }
    }

    try {
        const batch = await db.batch.create({
            data: {
                name: data.name,
                description: data.description,
                creatorId: session.user.id
            }
        })
        revalidatePath("/admin/batches")
        revalidatePath("/teacher/batches")
        return { success: true, batch }
    } catch (error: any) {
        if (error.code === 'P2002') {
            return { error: "Batch with this name already exists" }
        }
        return { error: "Failed to create batch" }
    }
}

export async function getBatches() {
    const session = await auth()
    if (!session) return { error: "Not authenticated" }

    try {
        const query: any = {
            include: {
                _count: {
                    select: { students: true, exams: true, assignments: true }
                },
                creator: {
                    select: { name: true }
                }
            },
            orderBy: { name: 'asc' }
        }

        if (session.user.role === "TEACHER") {
            query.where = {
                OR: [
                    { creatorId: session.user.id },
                    {
                        assignments: {
                            some: {
                                teacherId: session.user.id
                            }
                        }
                    }
                ]
            }
        }
        // ADMIN sees all

        const batches = await db.batch.findMany(query)
        return { batches }
    } catch (error) {
        return { error: "Failed to fetch batches" }
    }
}

export async function assignStudentsToBatch(batchId: string, studentIds: string[]) {
    const session = await auth()
    if (session?.user?.role !== "ADMIN" && session?.user?.role !== "TEACHER") {
        return { error: "Unauthorized" }
    }

    try {
        // We update users to point to this batch
        // First, disconnect all current students in this batch?
        // Actually, prisma allows set/connect.

        await db.batch.update({
            where: { id: batchId },
            data: {
                students: {
                    set: studentIds.map(id => ({ id }))
                }
            }
        })

        revalidatePath("/admin/batches")
        return { success: true }
    } catch (error) {
        return { error: "Failed to assign students" }
    }
}

export async function assignExamsToBatch(batchId: string, examIds: string[]) {
    const session = await auth()
    if (session?.user?.role !== "ADMIN" && session?.user?.role !== "TEACHER") {
        return { error: "Unauthorized" }
    }

    try {
        await db.batch.update({
            where: { id: batchId },
            data: {
                exams: {
                    set: examIds.map(id => ({ id }))
                }
            }
        })

        revalidatePath("/admin/batches")
        return { success: true }
    } catch (error) {
        return { error: "Failed to assign exams" }
    }
}

export async function deleteBatch(batchId: string) {
    const session = await auth()
    if (!session?.user?.id) return { error: "Unauthorized" }

    try {
        const batch = await db.batch.findUnique({
            where: { id: batchId },
            select: { creatorId: true }
        })

        if (!batch) return { error: "Batch not found" }

        const isAdmin = session.user.role === "ADMIN"
        const isCreator = batch.creatorId === session.user.id

        if (!isAdmin && !isCreator) {
            return { error: "Unauthorized: Only the creator or an admin can delete this batch" }
        }

        await db.batch.delete({
            where: { id: batchId }
        })
        revalidatePath("/admin/batches")
        revalidatePath("/teacher/batches")
        return { success: true }
    } catch (error) {
        return { error: "Failed to delete batch" }
    }
}

export async function getBatchDetails(batchId: string) {
    const session = await auth()
    if (!session) return { error: "Not authenticated" }

    try {
        const batch = await db.batch.findUnique({
            where: { id: batchId },
            include: {
                students: {
                    select: { id: true, name: true, email: true, city: true }
                },
                exams: {
                    select: { id: true, title: true }
                },
                assignments: {
                    include: {
                        teacher: {
                            select: { id: true, name: true, email: true }
                        }
                    }
                },
                creator: {
                    select: { id: true, name: true }
                }
            }
        })
        return { batch }
    } catch (error) {
        return { error: "Failed to fetch batch details" }
    }
}

export async function assignTeachersToBatch(batchId: string, teacherIds: string[]) {
    const session = await auth()
    if (!session?.user?.id) return { error: "Unauthorized" }

    try {
        // Check permissions: Admin or Creator
        const batch = await db.batch.findUnique({
            where: { id: batchId },
            select: { creatorId: true }
        })

        if (!batch) return { error: "Batch not found" }
        if (session.user.role !== "ADMIN" && batch.creatorId !== session.user.id) {
            return { error: "Unauthorized" }
        }

        await db.batch.update({
            where: { id: batchId },
            data: {
                assignments: {
                    deleteMany: {},
                    create: teacherIds.map(id => ({ teacherId: id }))
                }
            }
        })

        revalidatePath("/admin/batches")
        revalidatePath("/teacher/batches")
        return { success: true }
    } catch (error) {
        return { error: "Failed to assign teachers" }
    }
}

export async function transferBatchOwnership(batchId: string, newCreatorId: string) {
    const session = await auth()
    if (session?.user?.role !== "ADMIN") {
        return { error: "Only admins can transfer ownership" }
    }

    try {
        await db.batch.update({
            where: { id: batchId },
            data: { creatorId: newCreatorId }
        })

        revalidatePath("/admin/batches")
        revalidatePath("/teacher/batches")
        return { success: true }
    } catch (error) {
        return { error: "Failed to transfer ownership" }
    }
}

export async function getBatchAssignments(batchId: string) {
    try {
        const assignments = await db.batchAssignment.findMany({
            where: { batchId },
            select: { teacherId: true }
        })
        return { assignedTeacherIds: assignments.map(a => a.teacherId) }
    } catch (error) {
        return { error: "Failed to fetch assignments" }
    }
}
