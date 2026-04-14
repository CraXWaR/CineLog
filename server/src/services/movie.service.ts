const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export class MovieService {
    async getTrendingMovies() {
        const movieResponse = await fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`);

        if (!movieResponse.ok) {
            throw new Error("Failed to fetch trending movies");
        }

        const data: any = await movieResponse.json();
        return data.results;
    }

    async getMovieGenres() {
        const genresResponse = await fetch(`${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`);

        if (!genresResponse.ok) {
            throw new Error("Failed to fetch movie genres");
        }

        const data: any = await genresResponse.json();
        return data.genres;
    }

    async getDiscoverMovies(page: string, genres?: string) {
        const params = new URLSearchParams({api_key: TMDB_API_KEY!, page,});
        if (genres) params.append("with_genres", genres);

        const movieResponse = await fetch(`${TMDB_BASE_URL}/discover/movie?${params}`);
        if (!movieResponse.ok) throw new Error("Failed to fetch trending movies");

        const data: any = await movieResponse.json();
        return data.results;
    }

    async searchMovies(query: string) {
        const params = new URLSearchParams({api_key: TMDB_API_KEY!, query});

        const searchResponse = await fetch(`${TMDB_BASE_URL}/search/movie?${params}`);
        if (!searchResponse.ok) throw new Error("Failed to fetch trending movies");

        const data: any = await searchResponse.json();
        return data.results;
    }
}