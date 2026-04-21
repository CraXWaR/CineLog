import prisma from "../db/prisma.js";

export class WatchLaterService {
    private async findOrCreateMovie(tmdbId: string) {
        return prisma.movie.upsert({
            where: {tmdbId},
            update: {},
            create: {tmdbId},
        });
    }

    async addToWatchLater(userId: string, tmdbId: string) {
        const movie = await this.findOrCreateMovie(tmdbId);

        const existing = await prisma.userWatchLater.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });

        if (existing) {
            throw new Error("Movie already in watch later");
        }

        return prisma.userWatchLater.create({
            data: {userId, movieId: movie.id},
        });
    }

    async checkWatchLater(userId: string, tmdbId: string) {
        const movie = await prisma.movie.findUnique({
            where: {tmdbId},
        });

        if (!movie) return false;

        const entry = await prisma.userWatchLater.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });

        return !!entry;
    }

    async removeFromWatchLater(userId: string, tmdbId: string) {
        const movie = await prisma.movie.findUnique({
            where: {tmdbId},
        });

        if (!movie) throw new Error("Movie not found");

        const existing = await prisma.userWatchLater.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });

        if (!existing) throw new Error("Movie not in watch later");

        return prisma.userWatchLater.delete({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });
    }
}