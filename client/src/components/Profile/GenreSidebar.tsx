import styles from './GenreSidebar.module.css';

export function GenreSidebar({ genres }: any) {
    return (
        <section title="Top Genres">
            <div className={styles.grid}>
                {genres.map((genre: any) => (
                    <span
                        key={genre.name}
                        className={`${styles.tag} ${genre.isTop ? styles.active : ''}`}>
                        {genre.name}
                        <span className={styles.count}>·{genre.count}</span>
                    </span>
                ))}
            </div>
        </section>
    );
}