import type {MoviePayload} from "./movies.type.ts";

// TODO: remove userId from all request URLs and body once auth middleware is wired up
// userId should come from req.user.id on the backend instead
const API_URL = "http://localhost:8080/api";

function getToken(): string {
    return localStorage.getItem("token") ?? "";
}

function getUserId(): string {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).id : "";
}

function authHeaders() {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
    };
}

export async function checkWatched(tmdbId: number): Promise<boolean> {
    const res = await fetch(`${API_URL}/watched/check/${tmdbId}?userId=${getUserId()}`, {
        headers: authHeaders(),
    });
    const data = await res.json();
    return data.watched;
}

export async function addToWatched(movie: MoviePayload): Promise<void> {
    await fetch(`${API_URL}/watched`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({...movie, userId: getUserId()}),
    });
}

export async function checkWatchLater(tmdbId: number): Promise<boolean> {
    const res = await fetch(`${API_URL}/watch-later/check/${tmdbId}?userId=${getUserId()}`, {
        headers: authHeaders(),
    });
    const data = await res.json();
    return data.watchLater;
}

export async function addToWatchLater(movie: MoviePayload): Promise<void> {
    await fetch(`${API_URL}/watch-later`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({...movie, userId: getUserId()}),
    });
}

export async function removeFromWatchLater(tmdbId: number): Promise<void> {
    await fetch(`${API_URL}/watch-later/${tmdbId}?userId=${getUserId()}`, {
        method: "DELETE",
        headers: authHeaders(),
    });
}