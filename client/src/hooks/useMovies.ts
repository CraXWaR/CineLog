import {useState, useEffect} from "react";
import {fetchTrendingMovies, fetchMovieGenres} from "../services/movies.service.ts";

export function useMovies() {
    const [movies, setMovies] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchDataMoviesAndGenres = async () => {
            try {
                setLoading(true);
                setError(null);

                // fake delay
                await new Promise((resolve) => setTimeout(resolve, 1500));

                const [moviesData, genresData] = await Promise.all([
                    fetchTrendingMovies(),
                    fetchMovieGenres(),
                ]);

                setMovies(moviesData);
                setGenres(genresData);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchDataMoviesAndGenres();
    }, []);

    return {movies, genres, loading, error};
}