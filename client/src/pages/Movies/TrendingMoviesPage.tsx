import {useTrendingMovies} from "../../hooks/useTrendingMovies.ts";
import MoviesLayout from "../../layouts/MoviesLayout/MoviesLayout.tsx";

export default function TrendingMoviesPage() {
    const { movies, genres, loading, error } = useTrendingMovies();

    return (
        <MoviesLayout
            title="TRENDING"
            label="// trending this week"
            movies={movies}
            genres={genres}
            loading={loading}
            error={error}
        />
    );
}