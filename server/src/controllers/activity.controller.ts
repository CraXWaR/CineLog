import type { Request, Response } from "express";
import { ActivityService } from "../services/activity.service.js";

export class ActivityController {
    private activityService: ActivityService;

    constructor() {
        this.activityService = new ActivityService();
    }

    getFeed = async (req: Request, res: Response) => {
        try {
            const feed = await this.activityService.getFeed();
            return res.status(200).json(feed);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    };

    getAllFeeds = async (req: Request, res: Response) => {
        try {
            const feeds = await this.activityService.getAllFeeds();
            return res.status(200).json(feeds);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    };
}