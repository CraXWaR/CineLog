import { Link } from "react-router";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>

            {/* Background decorative text */}
            <span className={styles.bgText} aria-hidden="true">CINELOG</span>

            <div className={styles.inner}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot}>●</span>
                    <span>NOW PLAYING</span>
                </div>

                <h1 className={styles.title}>
                    <span className={styles.titleLine1}>YOUR MOVIES.</span>
                    <span className={styles.titleLine2} data-text="YOUR STORY.">YOUR STORY.</span>
                </h1>

                <p className={styles.subtitle}>
                    Track every film you watch. Rate it. Review it.<br />
                    See what your friends are obsessing over.
                </p>

                <Link to="/register" className={styles.cta}>
                    <span>GET STARTED</span>
                    <span className={styles.ctaArrow}>▶▶</span>
                </Link>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNum}>10K+</span>
                        <span className={styles.statLabel}>MOVIES</span>
                    </div>
                    <span className={styles.statDivider}>◈</span>
                    <div className={styles.stat}>
                        <span className={styles.statNum}>∞</span>
                        <span className={styles.statLabel}>REVIEWS</span>
                    </div>
                    <span className={styles.statDivider}>◈</span>
                    <div className={styles.stat}>
                        <span className={styles.statNum}>24/7</span>
                        <span className={styles.statLabel}>STREAMING</span>
                    </div>
                </div>
            </div>

        </section>
    );
}