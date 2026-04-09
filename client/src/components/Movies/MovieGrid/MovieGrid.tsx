import {useState} from "react";

import MovieCard from "../MovieCard/MovieCard.tsx";
import MovieModal from "../MovieModal/MovieModal.tsx";

import styles from "./MovieGrid.module.css";

type Genre = {
    id: number;
    name: string;
};
type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
};
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