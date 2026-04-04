import type {User} from "../../prisma/generated/prisma/index.js";
import bcrypt from "bcrypt";
import prisma from "../db/prisma.js";

export class UserService {
    async register(data: any): Promise<User> {
        const userData = data;
        userData.password = await bcrypt.hash(data.password, 12);

        return prisma.user.create({
            data: userData,
        })
    }

    async login(data: any): Promise<User> {
        const {email, password} = data;

        const user = await prisma.user.findUnique({
            where: {email: email},
        })

        if (!user) {
            throw new Error("Incorrect email or password");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            throw new Error("Incorrect email or password");
        }

        return user;
    }
}