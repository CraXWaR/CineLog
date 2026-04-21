import prisma from "../db/prisma.js";

export class WatchedService {
    private async findOrCreateMovie(tmdbId: string) {
        return prisma.movie.upsert({
            where: {tmdbId},
            update: {},
            create: {tmdbId},
        });
    }

    async addToWatched(userId: string, tmdbId: string) {
        const movie = await this.findOrCreateMovie(tmdbId);

        const existing = await prisma.userWatched.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });

        if (existing) {
            throw new Error("Movie already marked as watched");
        }

        return prisma.userWatched.create({
            data: {userId, movieId: movie.id},
        });
    }

    async checkWatched(userId: string, tmdbId: string) {
        const movie = await prisma.movie.findUnique({
            where: {tmdbId},
        });

        if (!movie) return false;

        const entry = await prisma.userWatched.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });

        return !!entry;
    }
}