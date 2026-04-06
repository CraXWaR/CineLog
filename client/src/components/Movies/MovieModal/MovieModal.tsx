import {useEffect} from "react";
import {RxCross2, RxStarFilled} from "react-icons/rx";

import styles from "./MovieModal.module.css";

type Genre = {
    id: number;
    name: string;
};
type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    overview: string;
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
    console.log(genres);
    const movieGenres = Array.isArray(genres)
        ? movie.genre_ids
            .map((id) => genres.find((g) => g.id === id)?.name)
            .filter(Boolean)
        : [];

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

                {/* Poster — full width at top */}
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

                {/* All info below poster */}
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
                                <span key={genre as string} className={styles.genre}>
                  {genre as string}
                </span>
                            ))}
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