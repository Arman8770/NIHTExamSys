import { PrismaClient } from './generated/prisma-client/index.js';
const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.user.findFirst({
        where: { role: 'ADMIN' },
        select: { email: true, name: true }
    });
    console.log(JSON.stringify(admin));
    await prisma.$disconnect();
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
