import type {User} from "../../prisma/generated/prisma/index.js";
import bcrypt from "bcrypt";
import prisma from "../db/prisma.js";
import jwt from "jsonwebtoken";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 11);

export class UserService {
    async register(data: any): Promise<User> {
        const userData = data;
        userData.password = await bcrypt.hash(data.password, 12);
        userData.publicId = nanoid();

        return prisma.user.create({
            data: userData,
        })
    }

    async login(data: any): Promise<{ user: User, refreshToken: string }> {
        const {email, password} = data;

        const user = await prisma.user.findUnique({
            where: {email: email},
        });

        if (!user) throw new Error("Incorrect email or password");

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) throw new Error("Incorrect email or password");

        const refreshToken = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_REFRESH_SECRET!,
            { expiresIn: '7d' }
        );

        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken }
        });

        return { user, refreshToken };
    }

    async refresh(refreshToken: string): Promise<string> {
        const user = await prisma.user.findFirst({ where: { refreshToken } });
        if (!user) throw new Error("Invalid refresh token");

        try {
            jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
        } catch {
            throw new Error("Refresh token expired, please login again");
        }

        return jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET!,
            {expiresIn: '15m'}
        );
    }

    async getUserMovies(publicId: string) {
        return prisma.user.findUnique({
            where: { publicId },
            include: {
                watchLater: { include: { movie: true } },
                watched: { include: { movie: true } },
            }
        });
    }

    async getPublicProfile(publicId: string) {
        const user = await prisma.user.findUnique({
            where: { publicId },
            select: {
                username: true,
                publicId: true,
            }
        });

        if (!user) throw new Error("User not found");
        return user;
    }
}