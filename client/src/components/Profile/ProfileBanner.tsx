import styles from './ProfileBanner.module.css';

export function ProfileBanner() {
    return (
        <section className={styles.banner}>
            <div className={styles.left}>
                <p className={styles.kicker}>User Profile</p>
                <h1 className={styles.title}>Tape Shelf</h1>
            </div>

            <div className={styles.right}>
                <span className={styles.pill}>Public</span>
                <span className={styles.pill}>Retro Mode</span>
            </div>
        </section>
    );
}
