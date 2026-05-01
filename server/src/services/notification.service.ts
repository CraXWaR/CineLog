import prisma from "../db/prisma.js";

export class NotificationService {
    async getNotifications(userId: string) {
        return prisma.notification.findMany({
            where: { userId },
            include: {
                from: {
                    select: { username: true, publicId: true }
                }
            },
            orderBy: { createdAt: "desc" }
        });
    }

    async dismissNotification(notificationId: string, userId: string) {
        const notification = await prisma.notification.findUnique({
            where: { id: notificationId }
        });

        if (!notification) throw new Error("Notification not found");
        if (notification.userId !== userId) throw new Error("Unauthorized");

        return prisma.notification.delete({
            where: { id: notificationId }
        });
    }
}