import type {Request, Response} from "express";
import {FriendsService} from "../services/friends.service.js";
import type {JwtPayload} from "jsonwebtoken";

export class FriendsController {
    private friendsService: FriendsService;

    constructor() {
        this.friendsService = new FriendsService();
    }

    sendRequest = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const { publicId } = req.body;
            if (!publicId) return res.status(400).json({ message: "Missing publicId" });

            await this.friendsService.sendRequest(user.id, publicId);
            return res.status(201).json({ message: "Friend request sent" });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    getStatus = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const publicId = req.params.publicId as string;
            const status = await this.friendsService.getStatus(user.id, publicId);
            return res.status(200).json(status);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    removeRequest = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const publicId = req.params.publicId as string;
            await this.friendsService.removeRequest(user.id, publicId);
            return res.status(200).json({ message: "Friend request removed" });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    acceptRequest = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const publicId = req.params.publicId as string;
            await this.friendsService.acceptRequest(user.id, publicId);
            return res.status(200).json({ message: "Friend request accepted" });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    getNotifications = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const notifications = await this.friendsService.getNotifications(user.id);
            return res.status(200).json(notifications);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    dismissNotification = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const id = req.params.id as string;
            await this.friendsService.dismissNotification(id, user.id);
            return res.status(200).json({ message: "Notification dismissed" });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}