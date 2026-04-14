import {useCallback, useState} from "react";
import {useDiscoverMovies} from "../../hooks/useDiscoverMovies.ts";
import {useSearchMovies} from "../../hooks/useSearchMovies.ts";

import MoviesLayout from "../../layouts/MoviesLayout/MoviesLayout.tsx";

export default function DiscoverMoviesPage() {
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
    const [pendingGenres, setPendingGenres] = useState<number[]>([]);
    const {movies, genres, page, setPage, loading, error} = useDiscoverMovies(selectedGenres);
    const {query, setQuery, results} = useSearchMovies();

    const handleToggle = (id: number) =>
        setPendingGenres((prev) =>
            prev.includes(id) ? prev.filter((genre) => genre !== id) : [...prev, id]
        );

    const handleOpen = useCallback(() => setPendingGenres(selectedGenres), [selectedGenres]);
    const handleClear = () => setPendingGenres([]);
    const handleClose = useCallback(() => {
        setPage(1);
        setSelectedGenres(pendingGenres);
    }, [pendingGenres]);

    const filteredResults = selectedGenres.length > 0
        ? results.filter(movie => selectedGenres.every(g => movie.genre_ids.includes(g)))
        : results;

    return (
        <MoviesLayout
            title="MOVIES"
            label="// discover"
            movies={movies}
            genres={genres}
            page={page}
            setPage={setPage}
            loading={loading}
            error={error}
            showFilter
            pendingGenres={pendingGenres}
            onToggle={handleToggle}
            onOpen={handleOpen}
            onClear={handleClear}
            onClose={handleClose}
            query={query}
            onSearch={setQuery}
            searchResults={filteredResults}
        />
    );
}