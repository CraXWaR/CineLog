import prisma from "../../src/db/prisma.js";
import {seedUser} from "./user.seed.js";

async function run() {
    await seedUser(prisma);

    console.log("All seeds completed!");
}

run().catch((err) => {
    console.log(err);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});