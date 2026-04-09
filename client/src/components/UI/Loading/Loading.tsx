import styles from "./Loading.module.css";

interface LoadingProps {
    text: string;
}

export default function Loading({text}: LoadingProps) {
    return (
        <div className={styles.loading}>
            <span className={styles.loadingIcon}>▶</span>
            <span className={styles.loadingText}>{text}</span>
        </div>
    );
}