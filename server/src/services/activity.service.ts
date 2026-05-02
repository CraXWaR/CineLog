import prisma from "../db/prisma.js";

export class ActivityService {
    async getFeed() {
        return prisma.userWatched.findMany({
            orderBy: { watchedAt: "desc" },
            take: 3,
            include: {
                user: { select: { username: true, publicId: true } },
                movie: { select: { tmdbId: true } },
            },
        });
    }

    async getAllFeeds() {
        return prisma.userWatched.findMany({
            orderBy: { watchedAt: "desc" },
            include: {
                user: { select: { username: true, publicId: true } },
                movie: { select: { tmdbId: true } },
            },
        });
    }
}