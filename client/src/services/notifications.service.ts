import {fetchWithAuth} from "../utils/fetchWithAuth.ts";

const API_URL = "http://localhost:8080/api";

export async function fetchNotifications(token: string) {
    const res = await fetchWithAuth(`${API_URL}/notification`, token);
    if (!res.ok) throw new Error("Failed to fetch notifications");
    return res.json();
}

export async function dismissNotification(id: string, token: string) {
    const res = await fetchWithAuth(`${API_URL}/notification/${id}`, token, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to dismiss notification");
}