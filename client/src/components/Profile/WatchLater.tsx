import styles from './WatchLater.module.css';

export interface WatchLaterItem {
    id: string | number;
    title: string;
    year: number;
    runtime: number;
    posterIcon: string;
    priority: 'high' | 'normal';
}

interface Props {
    movies: WatchLaterItem[];
}

export function WatchLater({ movies }: Props) {
    return (
        <section>
            <header>
                <h3>Watch Later</h3>
            </header>
            <ul className={styles.list}>
                {movies.map((movie) => (
                    <li key={movie.id} className={styles.row}>
                        <div className={styles.poster}>{movie.posterIcon}</div>
                        <div className={styles.info}>
                            <p className={styles.title}>{movie.title}</p>
                            <p className={styles.meta}>
                                {movie.year} · {movie.runtime}m
                            </p>
                        </div>
                        <span className={styles.badge}>
                            {movie.priority === 'high' ? 'HOT' : 'LATER'}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
