import type {Request, Response} from "express";
import {WatchLaterService} from "../services/watchLater.service.js";

export class WatchLaterController {
    private watchLaterService: WatchLaterService;

    constructor() {
        this.watchLaterService = new WatchLaterService();
    }

    addToWatchLater = async (req: Request, res: Response) => {
        try {
            const {tmdbId, title, poster, year, genres} = req.body;
            if (!tmdbId || !title || !poster || !year || !genres) {
                return res.status(400).json({message: "Missing required movie fields"});
            }

            // TODO: add check and replace if req.user.id once auth middleware is added
            const userId = req.body.userId;
            if (!userId) return res.status(400).json({message: "Missing userId"});

            const entry = await this.watchLaterService.addToWatchLater(userId, {
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

    checkWatchLater = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            const userId = req.query.userId as string;
            if (!userId) return res.status(400).json({message: "Missing userId"});

            const watchLater = await this.watchLaterService.checkWatchLater(userId, tmdbId);
            return res.status(200).json({watchLater});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    removeFromWatchLater = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);

            // TODO: add check and replace if req.user.id once auth middleware is added
            const userId = req.query.userId as string;
            if (!userId) return res.status(400).json({message: "Missing userId"});

            await this.watchLaterService.removeFromWatchLater(userId, tmdbId);
            return res.status(200).json({message: "Removed from watch later"});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}