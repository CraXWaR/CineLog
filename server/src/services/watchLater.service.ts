import prisma from "../db/prisma.js";
import type {IMovie} from "../interfaces/movie.interface.js";

export class WatchLaterService {
    private async findOrCreateMovie(movieData: IMovie) {
        return prisma.movie.upsert({
            where: {tmdbId: movieData.tmdbId},
            update: {},
            create: {
                tmdbId: movieData.tmdbId,
                title: movieData.title,
                poster: movieData.poster,
                year: movieData.year,
                genres: movieData.genres,
            },
        });
    }

    async addToWatchLater(userId: string, movieData: IMovie) {
        const movie = await this.findOrCreateMovie(movieData);

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