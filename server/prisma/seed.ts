import prisma from "../src/db/prisma.js";
import {seedUser} from "../src/seeders/user.seed.js";

async function run() {
    await seedUser(prisma);

    console.log("All seeds completed!");
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});