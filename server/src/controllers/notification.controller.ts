import type {Request, Response} from "express";
import {NotificationService} from "../services/notification.service.js";
import type {JwtPayload} from "jsonwebtoken";

export class NotificationController {
    private notificationService: NotificationService;

    constructor() {
        this.notificationService = new NotificationService();
    }

    getNotifications = async (req: Request, res: Response) => {
        try {
            const user = req.user as JwtPayload;
            if (!user?.id) return res.status(401).json({ message: "Unauthorized" });

            const notifications = await this.notificationService.getNotifications(user.id);
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
            await this.notificationService.dismissNotification(id, user.id);
            return res.status(200).json({ message: "Notification dismissed" });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}