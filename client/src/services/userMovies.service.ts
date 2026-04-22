// TODO: remove userId from all request URLs and body once auth middleware is wired up
// userId should come from req.user.id on the backend instead
const API_URL = "http://localhost:8080/api";

function authHeaders(token: string) {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

export async function checkWatched(tmdbId: number, token: string): Promise<boolean> {
    const res = await fetch(`${API_URL}/watched/check/${tmdbId}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    return data.watched;
}

export async function addToWatched(tmdbId: number, token: string): Promise<void> {
    await fetch(`${API_URL}/watched`, {
        method: "POST",
        headers: authHeaders(token),
        body: JSON.stringify({tmdbId}),
    });
}

export async function checkWatchLater(tmdbId: number, token: string): Promise<boolean> {
    const res = await fetch(`${API_URL}/watch-later/check/${tmdbId}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    return data.watchLater;
}

export async function addToWatchLater(tmdbId: number, token: string): Promise<void> {
    await fetch(`${API_URL}/watch-later`, {
        method: "POST",
        headers: authHeaders(token),
        body: JSON.stringify({tmdbId}),
    });
}

export async function removeFromWatchLater(tmdbId: number, token: string): Promise<void> {
    await fetch(`${API_URL}/watch-later/${tmdbId}`, {
        method: "DELETE",
        headers: authHeaders(token),
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