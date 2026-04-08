import MovieGrid from "../../components/Movies/MovieGrid/MovieGrid.tsx";

import {useMovies} from "../../hooks/useMovies.ts";

import styles from "./MoviesPage.module.css";
import {useState} from "react";
import GenreFilter from "../../components/Movies/GenreFilter/GenreFilter.tsx";

export default function MoviesPage() {
    const {movies, genres} = useMovies();
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const handleToggle = (id: number) => {
        setSelectedGenres((prev) =>
            prev.includes(id) ? prev.filter((genre) => genre !== id) : [...prev, id]
        );
    };

    const handleClear = () => setSelectedGenres([]);

    const filteredMovies = selectedGenres.length === 0 ? movies : movies.filter((movie) => selectedGenres.every((id) => movie.genre_ids.includes(id)));

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

            <div className={styles.mobileFilter}>
                <GenreFilter
                    genres={genres}
                    selectedGenres={selectedGenres}
                    onToggle={handleToggle}
                    onClear={handleClear}
                />
            </div>
            <MovieGrid movies={filteredMovies} genres={genres}/>
        </div>
    );
};
