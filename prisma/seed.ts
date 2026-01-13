import 'dotenv/config'
import { db } from '../lib/db'
import bcrypt from 'bcryptjs'

async function main() {
    console.log('ENV DATABASE_URL in seed.ts:', process.env.DATABASE_URL)
    const prisma = db;
    try {
        const defaultPassword = await bcrypt.hash('password123', 10)

        const admin = await prisma.user.upsert({
            where: { email: 'admin@exam.com' },
            update: {},
            create: {
                email: 'admin@exam.com',
                name: 'System Administrator',
                password: await bcrypt.hash('AdminPassword123', 10),
                role: "ADMIN",
            },
        })

        const teacher = await prisma.user.upsert({
            where: { email: 'teacher@example.com' },
            update: {},
            create: {
                email: 'teacher@example.com',
                name: 'Teacher User',
                password: defaultPassword,
                role: "TEACHER",
            },
        })

        const student = await prisma.user.upsert({
            where: { email: 'student@example.com' },
            update: {},
            create: {
                email: 'student@example.com',
                name: 'Student User',
                password: defaultPassword,
                role: "STUDENT",
            },
        })

        console.log({ admin, teacher, student })
    } finally {
        await prisma.$disconnect()
    }
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
