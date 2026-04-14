import {MovieService} from "../services/movie.service.js";
import type {Request, Response} from "express";

export class MovieController {
    private movieService: MovieService;

    constructor() {
        this.movieService = new MovieService();
    }

    getTrendingMovies = async (_req: Request, res: Response) => {
        try {
            const movies = await this.movieService.getTrendingMovies();
            return res.status(200).json({movies});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    getMovieGenres = async (_req: Request, res: Response) => {
        try {
            const genres = await this.movieService.getMovieGenres();
            return res.status(200).json({genres});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    getDiscoverMovies = async (req: Request, res: Response) => {
        try {
            const page = req.query.page as string || '1';
            const genres = req.query.with_genres as string | undefined;
            const movies = await this.movieService.getDiscoverMovies(page, genres);

            return res.status(200).json({movies});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    searchMovies = async (req: Request, res: Response) => {
        try {
            const {query} = req.query;
            if (!query) return res.json([]);

            const searchMovies = await this.movieService.searchMovies(query as string);
            return res.status(200).json({searchMovies});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}