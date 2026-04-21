import {useEffect} from "react";
import {RxCross2, RxStarFilled} from "react-icons/rx";
import {RiEyeLine, RiEyeFill, RiBookmarkLine, RiBookmarkFill} from "react-icons/ri";

import {useMovieActions} from "../../../hooks/useMovieActions.ts";
import type {Movie} from "../../../types/movies.type.ts";

import styles from "./MovieModal.module.css";

type Genre = {
    id: number;
    name: string;
};
type MovieModalProps = {
    movie: Movie;
    genres: Genre[];
    onClose: () => void;
};

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieModal({movie, genres, onClose}: MovieModalProps) {
    const year = movie.release_date?.split("-")[0] ?? "N/A";
    const rating = movie.vote_average?.toFixed(1) ?? "N/A";

    const movieGenres = Array.isArray(genres)
        ? movie.genre_ids
            .map((id) => genres.find((genre) => genre.id === id)?.name)
            .filter((name): name is string => Boolean(name))
        : [];

    const {isWatched, isWatchLater, watchedLoading, watchLaterLoading, statusLoading, handleWatched, handleWatchLater,} = useMovieActions(movie.id);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <div className={styles.cornerTL}/>
                <div className={styles.cornerTR}/>
                <div className={styles.cornerBL}/>
                <div className={styles.cornerBR}/>

                <button className={styles.closeBtn} onClick={onClose}>
                    <RxCross2/>
                </button>

                <div className={styles.posterWrapper}>
                    {movie.poster_path ? (
                        <img
                            src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className={styles.poster}
                        />
                    ) : (
                        <div className={styles.posterFallback}>
                            <span>▶</span>
                            <span>NO POSTER</span>
                        </div>
                    )}
                    <div className={styles.ratingBadge}>
                        <RxStarFilled size={12}/>
                        {rating}
                    </div>
                </div>

                <div className={styles.content}>
                    <div>
                        <span className={styles.label}>// MOVIE DETAILS</span>
                        <h2 className={styles.title}>{movie.title}</h2>
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>YEAR</span>
                            <span className={styles.metaValue}>{year}</span>
                        </div>
                        <span className={styles.metaDivider}>◈</span>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>RATING</span>
                            <span className={styles.metaValue}>{rating}</span>
                        </div>
                    </div>

                    {movieGenres.length > 0 && (
                        <div className={styles.genres}>
                            {movieGenres.map((genre) => (
                                <span key={genre} className={styles.genre}>
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}

                    {!statusLoading && (
                        <div className={styles.actions}>
                            <button
                                className={`${styles.actionBtn} ${isWatched ? styles.actionBtnActive : ""}`}
                                onClick={handleWatched}
                                disabled={isWatched || watchedLoading}
                            >
                                {isWatched ? <RiEyeFill size={16}/> : <RiEyeLine size={16}/>}
                                {watchedLoading ? "SAVING..." : isWatched ? "WATCHED" : "MARK WATCHED"}
                            </button>

                            <button
                                className={`${styles.actionBtn} ${isWatchLater ? styles.actionBtnWatchLater : ""}`}
                                onClick={handleWatchLater}
                                disabled={watchLaterLoading}
                            >
                                {isWatchLater ? <RiBookmarkFill size={16}/> : <RiBookmarkLine size={16}/>}
                                {watchLaterLoading ? "SAVING..." : isWatchLater ? "SAVED" : "WATCH LATER"}
                            </button>
                        </div>
                    )}

                    <div className={styles.overviewWrapper}>
                        <span className={styles.overviewLabel}>// OVERVIEW</span>
                        <p className={styles.overview}>
                            {movie.overview || "No overview available."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}