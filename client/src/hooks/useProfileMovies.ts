import {useState, useEffect} from "react";
import {fetchMovieById} from "../services/userMovies.service.ts";
import type {Genre, Movie} from "../types/movies.type.ts";
import type {UserResponse} from "../types/user.type.ts";
import {fetchMovieGenres} from "../services/movies.service.ts";

export function useProfileMovies(user: UserResponse | null) {
    const [watched, setWatched] = useState<Movie[]>([]);
    const [watchLater, setWatchLater] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user) return;

        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                
                //fake delay
                await new Promise((resolve) => setTimeout(resolve, 1500));

                const [watchedMovies, watchLaterMovies, genresData] = await Promise.all([
                    Promise.all(user.watched.map((entry) => fetchMovieById(entry.movie.tmdbId))),
                    Promise.all(user.watchLater.map((entry) => fetchMovieById(entry.movie.tmdbId))),
                    fetchMovieGenres(),
                ]);

                setWatched(watchedMovies);
                setWatchLater(watchLaterMovies);
                setGenres(genresData);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [user]);

    return {watched, watchLater, genres, loading, error};
}