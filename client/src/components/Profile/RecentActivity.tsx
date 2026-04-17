import styles from "./RecentActivity.module.css";

const mock = [
    { title: "Blade Runner 2049", action: "reviewed" },
    { title: "Annihilation", action: "liked" },
    { title: "The Substance", action: "reviewed" },
    { title: "Everything Everywhere All At Once", action: "liked" },
];

export default function RecentActivity() {
    return (
        <div className={`card ${styles.container}`}>
            <div className={styles.header}>
                <h3>▶ Recently Watched</h3>
                <span className="label">view all →</span>
            </div>

            <div className={styles.list}>
                {mock.map((m, i) => (
                    <div key={i} className={styles.item}>
                        <div className={styles.poster} />

                        <div className={styles.info}>
                            <p>{m.title}</p>
                            <span className="label">sci-fi</span>
                        </div>

                        <span
                            className={`badge ${
                                m.action === "liked" ? "badge--cyan" : "badge--pink"
                            }`}
                        >
              {m.action}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
}