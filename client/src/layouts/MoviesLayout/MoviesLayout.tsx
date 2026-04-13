import MovieGrid from "../../components/Movies/MovieGrid/MovieGrid.tsx";
import GenreFilter from "../../components/Movies/GenreFilter/GenreFilter.tsx";
import Loading from "../../components/UI/Loading/Loading.tsx";
import Error from "../../components/UI/Error/Error.tsx";
import CustomPagination from "../../components/UI/CustomPagination/CustomPagination.tsx";
import type {Movie, Genre} from "../../types/movies.type.ts";

import styles from "./MoviesLayout.module.css";

type MoviesLayoutProps = {
    title: string;
    label: string;
    movies: Movie[];
    genres: Genre[];
    page?: number;
    setPage?: (page: number) => void;
    totalPages?: number;
    loading: boolean;
    error: string | null;
    showFilter?: boolean;
    pendingGenres?: number[];
    onToggle?: (id: number) => void;
    onOpen?: () => void;
    onClear?: () => void;
    onClose?: () => void;
};

export default function MoviesLayout({
                                         title,
                                         label,
                                         movies,
                                         genres,
                                         page,
                                         setPage,
                                         totalPages = 500,
                                         loading,
                                         error,
                                         showFilter = false,
                                         pendingGenres = [],
                                         onToggle,
                                         onOpen,
                                         onClear,
                                         onClose,
                                     }: MoviesLayoutProps) {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>{label}</span>
                    <h1 className={styles.title} data-text={title}>{title}</h1>
                </div>
                <div className={styles.headerRight}>
                    <span className={styles.count}>{movies.length} TITLES</span>
                </div>
            </div>

            {loading ? (
                <Loading text="Loading movies..."/>
            ) : error ? (
                <Error text={error}/>
            ) : (
                <>
                    {showFilter && (
                        <div className={styles.mobileFilter}>
                            <GenreFilter
                                genres={genres}
                                selectedGenres={pendingGenres}
                                onToggle={onToggle!}
                                onOpen={onOpen!}
                                onClear={onClear!}
                                onClose={onClose!}
                            />
                        </div>
                    )}
                    <MovieGrid movies={movies} genres={genres}/>
                </>
            )}

            {page && setPage && (
                <CustomPagination currentPage={page} totalPages={totalPages} onPageChange={setPage}/>
            )}
        </div>
    );
}