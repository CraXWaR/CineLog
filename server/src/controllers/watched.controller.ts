import type {Request, Response} from "express";
import type {JwtPayload} from "jsonwebtoken";
import {WatchedService} from "../services/watched.service.js";

export class WatchedController {
    private watchedService: WatchedService;

    constructor() {
        this.watchedService = new WatchedService();
    }

    addToWatched = async (req: Request, res: Response) => {
        try {
            const {tmdbId} = req.body;
            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            const entry = await this.watchedService.addToWatched(user.id, String(tmdbId));
            return res.status(201).json({entry});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    checkWatched = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            const watched = await this.watchedService.checkWatched(user.id, tmdbId);
            return res.status(200).json({watched});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}