import {fetchWithAuth} from "../utils/fetchWithAuth.ts";

const API_URL = "http://localhost:8080/api";

export async function checkWatched(tmdbId: number, token: string): Promise<boolean> {
    const res = await fetchWithAuth(`${API_URL}/watched/check/${tmdbId}`, token);
    const data = await res.json();
    return data.watched;
}

export async function addToWatched(tmdbId: number, token: string): Promise<void> {
    await fetchWithAuth(`${API_URL}/watched`, token, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({tmdbId}),
    });
}

export async function checkWatchLater(tmdbId: number, token: string): Promise<boolean> {
    const res = await fetchWithAuth(`${API_URL}/watch-later/check/${tmdbId}`, token);
    const data = await res.json();
    return data.watchLater;
}

export async function addToWatchLater(tmdbId: number, token: string): Promise<void> {
    await fetchWithAuth(`${API_URL}/watch-later`, token, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({tmdbId}),
    });
}

export async function removeFromWatchLater(tmdbId: number, token: string): Promise<void> {
    await fetchWithAuth(`${API_URL}/watch-later/${tmdbId}`, token, {
        method: "DELETE",
    });
}

export async function fetchMovieById(tmdbId: string) {
    const response = await fetch(`${API_URL}/movies/${tmdbId}`);
    const data = await response.json();
    return {
        ...data.movie,
        genre_ids: data.movie.genres?.map((g: {id: number; name: string}) => g.id) ?? [],
    };
}