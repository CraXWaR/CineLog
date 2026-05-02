import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
    const handleDisableLink = (e: any) => {
        e.preventDefault();
        alert('//TODO CREATE THAT PAGE');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.topBorder} />

            <div className={styles.inner}>

                {/* Left — branding */}
                <div className={styles.brand}>
                    <span className={styles.logo} data-text="CINELOG">CINELOG</span>
                    <p className={styles.brandDesc}>
                        Track every film. Rate every story.<br />
                        Share every obsession.
                    </p>
                    <span className={styles.recBadge}>● REC</span>
                </div>

                {/* Center — links */}
                <nav className={styles.links}>
                    <span className={styles.linksTitle}>// NAVIGATE</span>
                    <Link to="/" className={styles.link}>HOME</Link>
                    <Link to="/activities" className={styles.link}>FEED</Link>
                    <Link to="/#" onClick={handleDisableLink} className={styles.link}>SEARCH</Link>
                    <Link to="/register" className={styles.link}>REGISTER</Link>
                    <Link to="/login" className={styles.link}>SIGN IN</Link>
                </nav>

                {/* Right — status */}
                <div className={styles.status}>
                    <span className={styles.linksTitle}>// SYSTEM</span>
                    <div className={styles.statusRow}>
                        <span className={styles.statusDot} />
                        <span className={styles.statusText}>SERVER ONLINE</span>
                    </div>
                    <div className={styles.statusRow}>
                        <span className={styles.statusDot} />
                        <span className={styles.statusText}>DB CONNECTED</span>
                    </div>
                    <div className={styles.statusRow}>
                        <span className={`${styles.statusDot} ${styles.statusDotPink}`} />
                        <span className={styles.statusText}>REC IN PROGRESS</span>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className={styles.bottomBar}>
                <span className={styles.copy}>© {new Date().getFullYear()} CINELOG — ALL RIGHTS RESERVED</span>
                <span className={styles.version}>v0.1.0 // BETA</span>
            </div>

        </footer>
    );
}