import prisma from "../db/prisma.js";

export class ReviewService {
    async saveReview(userId: string, tmdbId: string, review: string) {
        const movie = await prisma.movie.findUnique({where: {tmdbId}});
        if (!movie) throw new Error("Movie not found");

        const entry = await prisma.userWatched.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });
        if (!entry) throw new Error("Movie not in watched list to write your review");

        return prisma.userWatched.update({
            where: {userId_movieId: {userId, movieId: movie.id}},
            data: {review},
        });
    }

    async getReview(userId: string, tmdbId: string) {
        const movie = await prisma.movie.findUnique({where: {tmdbId}});
        if (!movie) return null;

        const entry = await prisma.userWatched.findUnique({
            where: {userId_movieId: {userId, movieId: movie.id}},
        });

        return entry?.review ?? null;
    }
}