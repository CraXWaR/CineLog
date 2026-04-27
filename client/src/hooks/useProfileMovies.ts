import {useState, useEffect} from "react";
import {fetchMovieById} from "../services/userMovies.service.ts";
import {fetchMovieGenres} from "../services/movies.service.ts";
import {fetchProfileMovies} from "../services/userProfile.service.ts";

import type {Genre, Movie} from "../types/movies.type.ts";

export function useProfileMovies(publicId: string) {
    const [watched, setWatched] = useState<Movie[]>([]);
    const [watchLater, setWatchLater] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!publicId) return;

        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchProfileMovies(publicId);
                if (!data) throw new Error("No data returned");

                const [watchedMovies, watchLaterMovies, genresData] = await Promise.all([
                    Promise.all(data.watched.map((entry: any) => fetchMovieById(entry.movie.tmdbId))),
                    Promise.all(data.watchLater.map((entry: any) => fetchMovieById(entry.movie.tmdbId))),
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
    }, [publicId]);


    return {watched, setWatched, watchLater, setWatchLater, genres, loading, error};
}