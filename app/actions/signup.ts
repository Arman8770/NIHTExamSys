"use server"

import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { z } from "zod"

const SignupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phoneNumber: z.string().regex(/^\d+$/, "Phone number must contain only digits").min(10, "Phone number must be at least 10 digits"),
    city: z.string().min(2, "City is required"),
    requestedRole: z.enum(["STUDENT", "TEACHER"]).optional(),
})

export async function signup(formData: FormData) {
    const requestedRoleValue = (formData.get("requestedRole") as string) || "STUDENT"

    const validatedFields = SignupSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        phoneNumber: formData.get("phoneNumber"),
        city: formData.get("city"),
        requestedRole: requestedRoleValue,
    })

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }

    const { name, email, password, phoneNumber, city, requestedRole } = validatedFields.data

    try {
        const existingUser = await db.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return { error: { email: ["User already exists with this email"] } }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phoneNumber: phoneNumber ? BigInt(phoneNumber) : null,
                city,
                role: "NONE",
                requestedRole: requestedRole as string || "STUDENT",
            },
        })

        return { success: "Account created successfully! Please wait for admin approval." }
    } catch (error) {
        console.error("Signup error:", error)
        return { error: { server: ["An unexpected error occurred. Please try again later."] } }
    }
}
