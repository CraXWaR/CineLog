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

export async function addToWatched(tmdbId: number): Promise<void> {
    await fetch(`${API_URL}/watched`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({tmdbId: tmdbId, userId: getUserId()}),
    });
}

export async function checkWatchLater(tmdbId: number): Promise<boolean> {
    const res = await fetch(`${API_URL}/watch-later/check/${tmdbId}?userId=${getUserId()}`, {
        headers: authHeaders(),
    });
    const data = await res.json();
    return data.watchLater;
}

export async function addToWatchLater(tmdbId: number): Promise<void> {
    await fetch(`${API_URL}/watch-later`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({tmdbId: tmdbId, userId: getUserId()}),
    });
}

export async function removeFromWatchLater(tmdbId: number): Promise<void> {
    await fetch(`${API_URL}/watch-later/${tmdbId}?userId=${getUserId()}`, {
        method: "DELETE",
        headers: authHeaders(),
    });
}

export async function fetchMovieById(tmdbId: string) {
    const response = await fetch(`${API_URL}/movies/${tmdbId}`);
    const data = await response.json();

    // map genre array to genre_ids to match trending/discover TMDB API response
    return {
        ...data.movie,
        genre_ids: data.movie.genres?.map((g: {id: number; name: string}) => g.id) ?? [],
    };
}