import type {ActivityEntry} from "../../types/activityEntry.type.ts";

import styles from "./ActivityEntryCard.module.css";

type ActivityProps = {
    activity: ActivityEntry;
}

export default function ActivityEntryCard({ activity }: ActivityProps) {
    return (
        <div className={styles.entry}>
            <div className={styles.entryLeft}>
                <span className={styles.avatar}>
                    {activity.username.slice(0, 2).toUpperCase()}
                </span>
                <div className={styles.entryMeta}>
                    <span className={styles.username}>{activity.username.toUpperCase()}</span>
                    <span className={styles.action}>watched</span>
                    <span className={styles.movie}>{activity.movie.toUpperCase()}</span>
                </div>
            </div>

            <div className={styles.entryRight}>
                <div className={styles.rating}>
                    {"★".repeat(activity.stars)}{"☆".repeat(5 - activity.stars)}
                </div>
                {activity.review ? (
                    <p className={styles.review}>"{activity.review}"</p>
                ) : (
                    <span className={styles.noReview}>// NO REVIEW ADDED</span>
                )}
                <span className={styles.time}>{activity.timeAgo}</span>
            </div>
        </div>
    );
}