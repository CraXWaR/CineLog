import MovieCard from "../../Movies/MovieCard/MovieCard.tsx";
import type {Movie, Genre} from "../../../types/movies.type.ts";

import styles from "./MovieRow.module.css";

interface Props {
    title: string;
    icon: string;
    movies: Movie[];
    genres: Genre[];
    onMovieClick?: (movie: Movie) => void;
}

export default function MovieRow({ title, icon, movies, genres, onMovieClick }: Props) {
    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>
                <span className={styles.icon}>{icon}</span>
                {title}
                <span className={styles.count}>{movies.length}</span>
            </h3>
            <div className={styles.row}>
                {movies.map((movie) => (
                    <div key={movie.id} className={styles.cardWrap}>
                        <MovieCard movie={movie} genres={genres} onClick={() => onMovieClick?.(movie)} />
                    </div>
                ))}
            </div>
        </section>
    );
}