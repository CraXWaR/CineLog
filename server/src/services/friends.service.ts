import prisma from "../db/prisma.js";

export class FriendsService {
    async sendRequest(userId: string, friendPublicId: string) {
        const friend = await prisma.user.findUnique({
            where: { publicId: friendPublicId },
        });

        if (!friend) throw new Error("User not found");
        if (friend.id === userId) throw new Error("Cannot add yourself");

        const existing = await prisma.userFriends.findUnique({
            where: { userId_friendId: { userId, friendId: friend.id } },
        });

        if (existing) throw new Error("Friend request already sent");

        await prisma.userFriends.create({
            data: { userId, friendId: friend.id }
        });

        await prisma.notification.upsert({
            where: { userId_fromId_type: { userId: friend.id, fromId: userId, type: "friend_request" } },
            update: { read: false, createdAt: new Date() },
            create: { userId: friend.id, fromId: userId, type: "friend_request" }
        });
    }

    async getStatus(userId: string, friendPublicId: string) {
        const friend = await prisma.user.findUnique({
            where: { publicId: friendPublicId },
        });

        if (!friend) throw new Error("User not found");

        const sent = await prisma.userFriends.findUnique({
            where: { userId_friendId: { userId, friendId: friend.id } },
        });

        if (sent) return { status: sent.status };

        const received = await prisma.userFriends.findUnique({
            where: { userId_friendId: { userId: friend.id, friendId: userId } },
        });

        if (received && received.status === "pending") return { status: "received" };
        if (received && received.status === "accepted") return { status: "accepted" };

        return { status: null };
    }

    async removeRequest(userId: string, friendPublicId: string) {
        const friend = await prisma.user.findUnique({
            where: { publicId: friendPublicId },
        });

        if (!friend) throw new Error("User not found");

        return prisma.userFriends.deleteMany({
            where: {
                OR: [
                    { userId, friendId: friend.id },
                    { userId: friend.id, friendId: userId }
                ]
            }
        });
    }

    async acceptRequest(userId: string, fromPublicId: string) {
        const from = await prisma.user.findUnique({
            where: { publicId: fromPublicId },
        });

        if (!from) throw new Error("User not found");

        await prisma.userFriends.update({
            where: { userId_friendId: { userId: from.id, friendId: userId } },
            data: { status: "accepted" }
        });

        await prisma.notification.deleteMany({
            where: { userId: userId, fromId: from.id, type: "friend_request" }
        });

        await prisma.notification.create({
            data: { userId: from.id, fromId: userId, type: "friend_accepted" }
        });
    }

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

    //TODO ADD REMOVE FRIEND LOGIC
}