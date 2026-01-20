"use server" // Clean rebuild

import { db as prisma } from "@/lib/db"
import { sendOTPEmail } from "@/lib/email"
import bcrypt from "bcryptjs"

export async function sendOTPAction(email: string) {
    if (!email) return { error: "Email is required" }
    console.log("Password reset requested for email:", email)

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            console.log("User not found for email:", email)
            return { error: "User not found" }
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const expires = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

        console.log("Creating OTP record for email:", email)
        // Save OTP to DB
        await prisma.otp.create({
            data: {
                email,
                otp,
                expires,
            },
        })

        console.log("Sending OTP email to:", email)
        // Send Email
        const mailResult = await sendOTPEmail(email, otp)
        if (!mailResult.success) {
            console.error("Failed to send OTP email:", mailResult.error)
            return { error: "Failed to send OTP email" }
        }

        console.log("OTP flow success for email:", email)
        return { success: "OTP sent successfully" }
    } catch (error) {
        console.error("sendOTPAction error:", error)
        return { error: `Something went wrong: ${error instanceof Error ? error.message : String(error)}` }
    }
}

export async function verifyOTPAction(email: string, otp: string) {
    if (!email || !otp) return { error: "Email and OTP are required" }

    try {
        const otpRecord = await prisma.otp.findFirst({
            where: {
                email,
                otp,
                expires: {
                    gt: new Date(),
                },
            },
            orderBy: {
                expires: 'desc'
            }
        })

        if (!otpRecord) {
            return { error: "Invalid or expired OTP" }
        }

        // Instead of deleting here, we could keep it for audit or delete it. 
        // For simplicity, let's just return success. 
        // We'll clean up old OTPs eventually.

        return { success: "OTP verified" }
    } catch (error) {
        console.error("verifyOTPAction error:", error)
        return { error: "Something went wrong" }
    }
}

export async function resetPasswordAction(email: string, otp: string, password: string) {
    if (!email || !otp || !password) return { error: "All fields are required" }

    try {
        // Verify OTP again to ensure security
        const otpRecord = await prisma.otp.findFirst({
            where: {
                email,
                otp,
                expires: {
                    gt: new Date(),
                },
            },
        })

        if (!otpRecord) {
            return { error: "Request expired or invalid" }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword },
        })

        // Cleanup OTPs for this email after successful reset
        await prisma.otp.deleteMany({
            where: { email },
        })

        return { success: "Password reset successfully" }
    } catch (error) {
        console.error("resetPasswordAction error:", error)
        return { error: "Something went wrong" }
    }
}
