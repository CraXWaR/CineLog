import {PrismaClient} from "../../prisma/generated/prisma/index.js";
import bcrypt from "bcrypt";

export async function seedUser(prismaClient: PrismaClient): Promise<void> {
    console.log("Seeding user...");

    const password = await bcrypt.hash('123', 12);

    await prismaClient.user.create({
        data: {
            username: "test user",
            password: password,
            email: "test@abv.bg",
        }
    });

    console.log("User has been created successfully!");
}