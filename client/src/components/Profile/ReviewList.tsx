import styles from './ReviewList.module.css';

export interface ReviewItem {
    id: string | number;
    movieTitle: string;
    rating: number;
    excerpt: string;
    postedAt: string;
}

interface Props {
    reviews: ReviewItem[];
}

export function ReviewList({ reviews }: Props) {
    return (
        <section className={styles.card}>
            <header className={styles.header}>
                <h3 className={styles.title}>Latest Reviews</h3>
            </header>

            <ul className={styles.list}>
                {reviews.map((review) => (
                    <li key={review.id} className={styles.item}>
                        <div className={styles.topRow}>
                            <p className={styles.movie}>{review.movieTitle}</p>
                            <span className={styles.rating}>{review.rating.toFixed(1)}</span>
                        </div>
                        <p className={styles.excerpt}>{review.excerpt}</p>
                        <p className={styles.date}>{review.postedAt}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
