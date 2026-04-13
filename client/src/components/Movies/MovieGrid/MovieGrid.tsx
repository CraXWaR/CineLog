import {useState} from "react";

import MovieCard from "../MovieCard/MovieCard.tsx";
import MovieModal from "../MovieModal/MovieModal.tsx";

import type {Movie, Genre} from "../../../types/movies.type.ts";

import styles from "./MovieGrid.module.css";

type MovieGridProps = {
    movies: Movie[];
    genres: Genre[];
};

export default function MovieGrid({movies, genres}: MovieGridProps) {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    if (movies.length === 0) {
        return (
            <div className={styles.empty}>
                <span className={styles.emptyIcon}>▶</span>
                <span className={styles.emptyText}>NO MOVIES FOUND...</span>
            </div>
        );
    }

    return (
        <>
            <div className={styles.grid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} genres={genres} onClick={() => setSelectedMovie(movie)}/>
                ))}
            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    genres={genres}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </>
    );
}