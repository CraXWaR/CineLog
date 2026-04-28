const API_URL = "http://localhost:8080/api";

export async function fetchNotifications(token: string) {
    const res = await fetch(`${API_URL}/friends/notifications`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Failed to fetch notifications");
    return res.json();
}

export async function dismissNotification(id: string, token: string) {
    const res = await fetch(`${API_URL}/friends/notifications/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Failed to dismiss notification");
}