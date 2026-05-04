import {PrismaClient} from "../../prisma/generated/prisma/index.js";
import bcrypt from "bcrypt";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 11);

export async function seedUser(prismaClient: PrismaClient): Promise<void> {
    console.log("Seeding user...");

    const password = await bcrypt.hash('123', 12);

    await prismaClient.user.create({
        data: {
            username: "test user",
            password: password,
            email: "test@gmail.bg",
            publicId: nanoid(),
        }
    });

    console.log("User has been created successfully!");
}