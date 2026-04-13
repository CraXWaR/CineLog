import {useCallback, useState} from "react";
import {useMovies} from "../../hooks/useMovies.ts";

import MovieGrid from "../../components/Movies/MovieGrid/MovieGrid.tsx";
import GenreFilter from "../../components/Movies/GenreFilter/GenreFilter.tsx";
import Loading from "../../components/UI/Loading/Loading.tsx";
import Error from "../../components/UI/Error/Error.tsx";
import CustomPagination from "../../components/UI/CustomPagination/CustomPagination.tsx";

import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
    const [pendingGenres, setPendingGenres] = useState<number[]>([]);
    const {movies, genres, page, setPage, loading, error} = useMovies(selectedGenres);

    const handleToggle = (id: number) => {
        setPendingGenres((prev) =>
            prev.includes(id) ? prev.filter((genre) => genre !== id) : [...prev, id]
        );
    };

    const handleOpen = useCallback(() => {
        setPendingGenres(selectedGenres);
    }, [selectedGenres]);

    const handleClear = () => setPendingGenres([]);

    const handleClose = useCallback(() => {
        setPage(1);
        setSelectedGenres(pendingGenres);
    }, [pendingGenres]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// discover</span>
                    <h1 className={styles.title} data-text="MOVIES">MOVIES</h1>
                </div>
                <div className={styles.headerRight}>
                    <span className={styles.count}>{movies.length} TITLES</span>
                </div>
            </div>

            {loading ? (
                <Loading text={'Loading movies...'}/>
            ) : error ? (
                <Error text={error}/>
            ) : (
                <>
                    <div className={styles.mobileFilter}>
                        <GenreFilter
                            genres={genres}
                            selectedGenres={pendingGenres}
                            onToggle={handleToggle}
                            onOpen={handleOpen}
                            onClear={handleClear}
                            onClose={handleClose}
                        />
                    </div>
                    <MovieGrid movies={movies} genres={genres}/>
                </>
            )}

            <CustomPagination currentPage={page} totalPages={500} onPageChange={setPage}/>

        </div>
    );
};
