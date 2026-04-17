import styles from "./ProfileHero.module.css";

export default function ProfileHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay} />

            <div className={styles.inner}>
                <div className={styles.avatar}>VK</div>

                <div className={styles.info}>
                    <h1 className={styles.username}>vkoev</h1>
                    <p className="label">member since april 2024</p>

                    <div className={styles.actions}>
                        <button className="btn btn--secondary">+ add friend</button>
                        <button className="btn btn--primary">edit profile</button>
                    </div>
                </div>
            </div>

            <span className={styles.vhs}>VHS</span>
        </div>
    );
}