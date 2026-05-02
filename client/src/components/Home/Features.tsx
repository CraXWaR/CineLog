import styles from "./Features.module.css";

const features = [
    {
        icon: "▶",
        accent: "pink",
        title: "LOG EVERY FILM",
        desc: "Add any movie to your watched list in seconds. Your entire viewing history in one place.",
    },
    {
        icon: "★",
        accent: "cyan",
        title: "SHARE YOUR TAKE",
        desc: "Write short reviews for every film you watch. Your opinions, preserved forever",
    },
    {
        icon: "◈",
        accent: "purple",
        title: "FOLLOW FRIENDS",
        desc: "See what your crew is watching in real time. Discover films through the people you trust.",
    },
];

export default function Features() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>// FEATURES</span>
                <div className={styles.sectionLine}/>
            </div>

            <div className={styles.grid}>
                {features.map((feature) => (
                    <div key={feature.title} className={`${styles.card} ${styles[`card--${feature.accent}`]}`}>
                        <div className={styles.cardCornerTL}/>
                        <div className={styles.cardCornerBR}/>

                        <span className={`${styles.icon} ${styles[`icon--${feature.accent}`]}`}>
                          {feature.icon}
                        </span>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardDesc}>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}