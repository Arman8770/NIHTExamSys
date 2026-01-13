
import type { NextAuthConfig } from "next-auth"
import { Role } from "@/types/role"

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard")
            const isOnAdmin = nextUrl.pathname.startsWith("/admin")
            const isOnTeacher = nextUrl.pathname.startsWith("/teacher")
            const isOnStudent = nextUrl.pathname.startsWith("/student")

            if (isOnDashboard || isOnAdmin || isOnTeacher || isOnStudent) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // Redirect authenticated users to dashboard if they visit login page
                // This logic might need refinement based on exact reqs, but kept simple for now
            }
            return true
        },
        session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            if (token.role && session.user) {
                session.user.role = token.role as Role
            }
            return session
        },
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
    },
    providers: [], // Configured in auth.ts
} satisfies NextAuthConfig
