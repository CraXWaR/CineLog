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