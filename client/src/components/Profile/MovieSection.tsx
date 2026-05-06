import { MdVideocamOff } from "react-icons/md";

import type { Movie, Genre } from "../../types/movies.type.ts";

import MovieRow from "./subComponents/MovieRow.tsx";

import styles from "./MovieSection.module.css";

interface MovieSectionProps {
    watched: Movie[];
    watchLater: Movie[];
    genres: Genre[];
    onMovieClick: (movie: Movie) => void;
}

export default function MovieSection({watched, watchLater, genres, onMovieClick }: MovieSectionProps) {

    return (
        <main className={styles.main}>
            {watched.length === 0 && watchLater.length === 0 ? (
                <div className={styles.empty}>
                    <MdVideocamOff className={styles.emptyIcon}/>
                    <p className={styles.emptyText}>NO SIGNAL</p>
                    <p className={styles.emptySubtext}>// NO MOVIES FOUND IN THIS TAPE</p>
                </div>
            ) : (
                <>
                    <MovieRow title="Recently Watched" icon="🎬" movies={watched} genres={genres} onMovieClick={onMovieClick}/>
                    <MovieRow title="Watch Later" icon="🕐" movies={watchLater} genres={genres} onMovieClick={onMovieClick}/>
                </>
            )}
        </main>
    );
}