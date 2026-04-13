import {useState, useEffect} from "react";
import {fetchDiscoverMovies, fetchMovieGenres} from "../services/movies.service.ts";

export function useDiscoverMovies(selectedGenres: number[] = []) {
    const [movies, setMovies] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchDataMoviesAndGenres = async () => {
            try {
                setLoading(true);
                setError(null);

                //fake delay
                await new Promise((resolve) => setTimeout(resolve, 1500));

                const [moviesData, genresData] = await Promise.all([
                    fetchDiscoverMovies(page, selectedGenres),
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
    }, [page, JSON.stringify(selectedGenres)]);

    return { movies, genres, page, setPage, loading, error };
}