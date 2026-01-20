const { PrismaClient } = require('./generated/prisma-client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
require('dotenv').config();

const prismaClientSingleton = () => {
    const adapter = new PrismaMariaDb(process.env.DATABASE_URL)
    return new PrismaClient({ adapter })
}

const prisma = prismaClientSingleton();

async function test() {
    try {
        console.log("Attempting to find user...");
        const user = await prisma.user.findFirst();
        console.log("User found:", user ? "Yes" : "No");

        console.log("Attempting to create OTP...");
        const otp = await prisma.oTP.create({
            data: {
                email: "test@example.com",
                otp: "123456",
                expires: new Date(Date.now() + 600000)
            }
        });
        console.log("OTP created successfully:", otp);
    } catch (err) {
        console.error("Test failed:", err);
    } finally {
        await prisma.$disconnect();
    }
}

test();
