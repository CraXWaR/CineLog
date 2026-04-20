import type {Request, Response} from "express";
import {WatchedService} from "../services/watched.service.js";

export class WatchedController {
    private watchedService: WatchedService;

    constructor() {
        this.watchedService = new WatchedService();
    }

    addToWatched = async (req: Request, res: Response) => {
        try {
            const {tmdbId, title, poster, year, genres} = req.body;
            if (!tmdbId || !title || !poster || !year || !genres) {
                return res.status(400).json({message: "Missing required movie fields"});
            }

            // TODO: add check and replace if req.user.id once auth middleware is added
            const userId = req.body.userId;
            if (!userId) return res.status(400).json({message: "Missing userId"});

            const entry = await this.watchedService.addToWatched(userId, {
                tmdbId: String(tmdbId),
                title,
                poster,
                year,
                genres,
            });

            return res.status(201).json({entry});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    checkWatched = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            const userId = req.query.userId as string;
            if (!userId) return res.status(400).json({message: "Missing userId"});

            const watched = await this.watchedService.checkWatched(userId, tmdbId);
            return res.status(200).json({watched});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}