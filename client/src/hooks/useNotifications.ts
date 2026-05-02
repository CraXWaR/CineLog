import {useState, useEffect} from "react";
import {useAuth} from "../context/auth.context.tsx";
import {fetchNotifications, dismissNotification} from "../services/notifications.service.ts";

interface Notification {
    id: string;
    type: "friend_request" | "friend_accepted";
    read: boolean;
    createdAt: string;
    from: {
        username: string;
        publicId: string;
    }
}

export function useNotifications() {
    const {token} = useAuth();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (!token) return;

        const getNotifications = async () => {
            try {
                setLoading(true);
                const data = await fetchNotifications(token as string);
                setNotifications(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getNotifications();
    }, [token]);

    const handleDismiss = async (id: string) => {
        try {
            await dismissNotification(id, token as string);
            setNotifications(prev => prev.filter(n => n.id !== id));
        } catch (err: any) {
            setError(err.message);
        }
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return {notifications, unreadCount, handleDismiss, loading, error};
}