const API_URL = "http://localhost:8080/api";

export async function fetchTrendingMovies() {
    const response = await fetch(`${API_URL}/movies/trending`);
    const data = await response.json();
    return data.movies;
}

export async function fetchMovieGenres() {
    const response = await fetch(`${API_URL}/movies/genres`);
    const data = await response.json();
    return data.genres;
}

export async function fetchDiscoverMovies(page: number, genres: number[] = []) {
    const params = new URLSearchParams({ page: String(page) });
    if (genres.length > 0) params.append("with_genres", genres.join(","));

    const response = await fetch(`${API_URL}/movies/discover?${params}`);
    const data = await response.json();
    return data.movies;
}