const { PrismaClient } = require('./generated/prisma-client');
const prisma = new PrismaClient();

async function main() {
    const student = await prisma.user.findFirst({
        where: { role: 'STUDENT' },
        select: { email: true }
    });
    console.log(JSON.stringify(student));
    await prisma.$disconnect();
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
