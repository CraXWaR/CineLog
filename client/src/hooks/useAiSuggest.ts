import { useState } from "react";
import { fetchAiSuggest } from "../services/aiSuggest.service.ts";
import type { Movie } from "../types/movies.type.ts";

export function useAiSuggest() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const suggest = async (prompt: string) => {
        const trimmed = prompt.trim();
        if (!trimmed || loading) return;

        setLoading(true);
        setError(null);
        setHasSearched(true);

        try {
            const data = await fetchAiSuggest(trimmed);
            setMovies(data);
        } catch(err: any) {
            setError(err.message || "Something went wrong");
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    return { movies, loading, error, hasSearched, suggest };
}