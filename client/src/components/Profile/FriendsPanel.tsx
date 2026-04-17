import styles from "./FriendsPanel.module.css";

const friends = ["MIRA_REY", "JAKUB_K", "SOFI_V", "DANI_M"];

export default function FriendsPanel() {
    return (
        <div className={`card ${styles.panel}`}>
            <h4 className="label label--cyan">Friends</h4>

            {friends.map((f, i) => (
                <div key={i} className={styles.friend}>
                    <div className={styles.avatar}>{f.slice(0, 2)}</div>
                    <span>{f}</span>
                </div>
            ))}
        </div>
    );
}