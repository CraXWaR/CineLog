import {RxStarFilled} from "react-icons/rx";
import type {Movie, Genre} from "../../../types/movies.type.ts";

import styles from "./MovieCard.module.css";

type MovieCardProps = {
    movie: Movie;
    genres: Genre[];
    onClick: () => void;
};

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({movie, genres, onClick}: MovieCardProps) {
    const year = movie.release_date?.split("-")[0] ?? "N/A";
    const rating = movie.vote_average?.toFixed(1) ?? "N/A";

    const movieGenres = Array.isArray(genres) ? movie.genre_ids.slice(0, 2).map((id) => genres.find((g) => g.id === id)?.name).filter(Boolean) : [];

    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.posterWrapper}>
                {movie.poster_path ? (
                        <img src={`${TMDB_IMAGE_URL}${movie.poster_path}`} alt={movie.title} className={styles.poster}/>) :
                    (
                        <div className={styles.posterFallback}>
                            <span>▶</span>
                            <span>NO POSTER</span>
                        </div>
                    )}

                <div className={styles.ratingBadge}>
                    <RxStarFilled size={12}/>
                    <span>{rating}</span>
                </div>

                <div className={styles.overlay}>
                    <p className={styles.overview}>{movie.overview}</p>
                </div>
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{movie.title}</h3>

                <div className={styles.meta}>
                    <span className={styles.year}>{year}</span>
                    {movieGenres.length > 0 && (
                        <span className={styles.genres}>
                            {movieGenres.join(" · ")}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}