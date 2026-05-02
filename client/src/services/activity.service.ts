const API_URL = "http://localhost:8080/api";

export async function fetchActivityFeed() {
    const res = await fetch(`${API_URL}/activity/feed`);
    if (!res.ok) throw new Error("Failed to fetch activity feed");
    return res.json();
}

export async function fetchAllActivities() {
    const res = await fetch(`${API_URL}/activity/all-feeds`);
    if (!res.ok) throw new Error("Failed to fetch activity feed");
    return res.json();
}