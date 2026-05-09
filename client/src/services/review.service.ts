import {fetchWithAuth} from "../utils/fetchWithAuth.ts";

const API_URL = import.meta.env.VITE_API_URL;

export async function saveReview(tmdbId: number, review: string, token: string): Promise<void> {
    await fetchWithAuth(`${API_URL}/review/${tmdbId}`, token, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({review}),
    });
}

export async function getReview(tmdbId: number, token: string): Promise<string | null> {
    const res = await fetchWithAuth(`${API_URL}/review/${tmdbId}`, token);
    const data = await res.json();
    return data.review ?? null;
}