import type {Request, Response} from "express";
import type {JwtPayload} from "jsonwebtoken";
import {WatchLaterService} from "../services/watchLater.service.js";

export class WatchLaterController {
    private watchLaterService: WatchLaterService;

    constructor() {
        this.watchLaterService = new WatchLaterService();
    }

    addToWatchLater = async (req: Request, res: Response) => {
        try {
            const {tmdbId} = req.body;
            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            const entry = await this.watchLaterService.addToWatchLater(user.id, String(tmdbId));
            return res.status(201).json({entry});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    checkWatchLater = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            const watchLater = await this.watchLaterService.checkWatchLater(user.id, tmdbId);
            return res.status(200).json({watchLater});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    removeFromWatchLater = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            await this.watchLaterService.removeFromWatchLater(user.id, tmdbId);
            return res.status(200).json({message: "Removed from watch later"});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}