"use server"

import { auth } from "@/lib/auth"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phoneNumber: z.string().optional(),
    city: z.string().optional(),
})

export async function updateProfile(prevState: any, formData: FormData) {
    const session = await auth()
    if (!session || !session.user || !session.user.id) {
        return { error: "Unauthorized" }
    }

    const rawData = {
        name: formData.get("name"),
        phoneNumber: formData.get("phoneNumber"),
        city: formData.get("city"),
    }

    const validatedFields = profileSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: "Invalid fields", issues: validatedFields.error.flatten() }
    }

    const { name, phoneNumber, city } = validatedFields.data

    try {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { profileUpdateCount: true }
        })

        if (!user) return { error: "User not found" }

        if (user.profileUpdateCount >= 2) {
            return { error: "You have reached the maximum number of profile updates (2)." }
        }

        await prisma.user.update({
            where: { id: session.user.id },
            data: {
                name,
                phoneNumber: phoneNumber ? BigInt(phoneNumber) : null,
                city,
                profileUpdateCount: { increment: 1 }
            },
        })

        revalidatePath("/settings")
        return { success: "Profile updated successfully!" }
    } catch (error) {
        console.error("Failed to update profile:", error)
        return { error: "Failed to update profile. Please try again." }
    }
}
