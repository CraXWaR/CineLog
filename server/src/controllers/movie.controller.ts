import {MovieService} from "../services/movie.service.js";
import type {Request, Response} from "express";

export class MovieController {
    private movieService: MovieService;

    constructor() {
        this.movieService = new MovieService();
    }

    getTrendingMovies = async (req: Request, res: Response) => {
        try {
            const movies = await this.movieService.getTrendingMovies();
            return res.status(200).json({movies});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    getMovieGenres = async (req: Request, res: Response) => {
        try {
            const genres = await this.movieService.getMovieGenres();
            return res.status(200).json({genres});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}