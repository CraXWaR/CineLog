import { useState, useEffect } from "react";
import {searchMovies} from "../services/movies.service.ts";
import type {Movie} from "../types/movies.type.ts";

export function useSearchMovies() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Movie[]>([]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            const movies = await searchMovies(query);
            setResults(movies);
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    return { query, setQuery, results };
}