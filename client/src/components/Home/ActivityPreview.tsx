import styles from "./ActivityPreview.module.css";

//TODO ADD REAL ACTIVITIES
const mockActivity = [
    {
        user: "ALEX_V",
        action: "watched",
        movie: "BLADE RUNNER 2049",
        rating: 5,
        review: "Visually stunning. A masterpiece of modern sci-fi.",
        time: "2 MIN AGO",
    },
    {
        user: "NINA_K",
        action: "watched",
        movie: "THE SUBSTANCE",
        rating: 4,
        review: "Disturbing and brilliant. Not for the faint hearted.",
        time: "14 MIN AGO",
    },
    {
        user: "MARCO_R",
        action: "watched",
        movie: "DUNE: PART TWO",
        rating: 5,
        review: "Epic in every sense of the word.",
        time: "1 HR AGO",
    },
];

export default function ActivityPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>// LIVE FEED</span>
                <div className={styles.sectionLine}/>
                <span className={styles.liveBadge}>● LIVE</span>
            </div>

            <div className={styles.feed}>
                {mockActivity.map((item, index) => (
                    <div key={index} className={styles.entry}>
                        <div className={styles.entryLeft}>
                          <span className={styles.avatar}>
                            {item.user.charAt(0)}
                          </span>
                            <div className={styles.entryMeta}>
                                <span className={styles.username}>{item.user}</span>
                                <span className={styles.action}>watched</span>
                                <span className={styles.movie}>{item.movie}</span>
                            </div>
                        </div>

                        <div className={styles.entryRight}>
                            <div className={styles.rating}>
                                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                            </div>
                            <p className={styles.review}>"{item.review}"</p>
                            <span className={styles.time}>{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}