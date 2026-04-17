import styles from './MovieList.module.css';

export interface MovieListItem {
    id: string | number;
    title: string;
    year: number;
    rating: number;
    posterIcon: string;
}

interface Props {
    movies: MovieListItem[];
}

export function MovieList({ movies }: Props) {
    return (
        <section className={styles.card}>
            <header className={styles.header}>
                <h3 className={styles.title}>Recently Watched</h3>
            </header>

            <ul className={styles.list}>
                {movies.map((movie) => (
                    <li key={movie.id} className={styles.row}>
                        <div className={styles.poster}>{movie.posterIcon}</div>
                        <div className={styles.info}>
                            <p className={styles.movieTitle}>{movie.title}</p>
                            <p className={styles.meta}>
                                {movie.year} · {movie.rating.toFixed(1)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
