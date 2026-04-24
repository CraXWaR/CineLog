import {useState, useEffect} from "react";
import {fetchMovieById} from "../services/userMovies.service.ts";
import {fetchMovieGenres} from "../services/movies.service.ts";
import type {Genre, Movie} from "../types/movies.type.ts";
import {useAuth} from "../context/auth.context.tsx";

const API_URL = "http://localhost:8080/api";

export function useProfileMovies(token: string) {
    const [watched, setWatched] = useState<Movie[]>([]);
    const [watchLater, setWatchLater] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { refreshToken } = useAuth();

    useEffect(() => {
        if (!token) return;

        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                
                //fake delay
                await new Promise((resolve) => setTimeout(resolve, 1500));

                let res = await fetch(`${API_URL}/me/movies`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (res.status === 401) {
                    const newToken = await refreshToken();
                    if (!newToken) return;
                    res = await fetch(`${API_URL}/me/movies`, {
                        headers: { Authorization: `Bearer ${newToken}` }
                    });
                }

                const data = await res.json();
                if (!data) throw new Error("No data returned");

                const [watchedMovies, watchLaterMovies, genresData] = await Promise.all([
                    Promise.all(data.watched.map((entry:any) => fetchMovieById(entry.movie.tmdbId))),
                    Promise.all(data.watchLater.map((entry:any) => fetchMovieById(entry.movie.tmdbId))),
                    fetchMovieGenres(),
                ]);

                setWatched(watchedMovies);
                setWatchLater(watchLaterMovies);
                setGenres(genresData);
            } catch (err: any) {
                console.log(err)
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [token]);

    return {watched, setWatched, watchLater, setWatchLater, genres, loading, error};
}