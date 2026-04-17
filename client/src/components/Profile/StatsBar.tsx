import styles from "./StatsBar.module.css";

export default function StatsBar() {
    return (
        <div className={styles.bar}>
            <Stat label="watched" value="247" color="cyan" />
            <Stat label="reviews" value="38" color="pink" />
            <Stat label="liked" value="91" color="yellow" />
            <Stat label="watch later" value="54" color="purple" />
        </div>
    );
}

function Stat({ label, value, color }: any) {
    return (
        <div className={styles.stat}>
            <h3 className={`text-${color}`}>{value}</h3>
            <span className="label">{label}</span>
        </div>
    );
}