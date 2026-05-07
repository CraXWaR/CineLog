import type {Request, Response} from "express";
import type {JwtPayload} from "jsonwebtoken";
import {ReviewService} from "../services/review.service.js";

export class ReviewController {
    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    saveReview = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            const {review} = req.body;

            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});
            if (!review) return res.status(400).json({message: "Missing review"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            const entry = await this.reviewService.saveReview(user.id, tmdbId, review);
            return res.status(200).json({entry});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }

    getReview = async (req: Request, res: Response) => {
        try {
            const tmdbId = String(req.params.tmdbId);
            if (!tmdbId) return res.status(400).json({message: "Missing tmdbId"});

            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({message: "Unauthorized"});

            const review = await this.reviewService.getReview(user.id, tmdbId);
            return res.status(200).json({review});
        } catch (error: any) {
            return res.status(500).json({message: error.message});
        }
    }
}