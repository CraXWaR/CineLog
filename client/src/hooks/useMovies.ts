import {useState, useEffect} from "react";
import {fetchTrendingMovies, fetchMovieGenres} from "../services/movies.service.ts";

export function useMovies() {
    const [movies, setMovies] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies).catch(console.error);
        fetchMovieGenres().then(setGenres).catch(console.error);
    }, []);

    return {movies, genres};
}