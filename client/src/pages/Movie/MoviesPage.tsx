import MovieGrid from "../../components/Movies/MovieGrid/MovieGrid.tsx";

import {useMovies} from "../../hooks/useMovies.ts";

import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
    const {movies, genres} = useMovies();
    
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// TRENDING THIS WEEK</span>
                    <h1 className={styles.title} data-text="MOVIES">MOVIES</h1>
                </div>
                <div className={styles.headerRight}>
                    <span className={styles.count}>{movies.length} TITLES</span>
                </div>
            </div>

            <MovieGrid movies={movies} genres={genres}/>
        </div>
    );
};
