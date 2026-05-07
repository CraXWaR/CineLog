import { useState } from "react";
import type {ActivityEntry} from "../../types/activityEntry.type.ts";
import ReviewPopup from "../Movies/ReviewPopup/ReviewPopup.tsx";

import styles from "./ActivityEntryCard.module.css";

type ActivityProps = {
    activity: ActivityEntry;
}

export default function ActivityEntryCard({ activity }: ActivityProps) {
    const [reviewOpen, setReviewOpen] = useState(false);

    return (
        <>
            <div className={styles.entry} onClick={() => activity.review && setReviewOpen(true)}
                 style={{cursor: activity.review ? "pointer" : "default"}}>
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
                        <span className={styles.noReview}>// no review added</span>
                    )}
                    <span className={styles.time}>{activity.timeAgo}</span>
                </div>
            </div>

            {reviewOpen && (
                <ReviewPopup
                    reviewText={activity.review!}
                    onCancel={() => setReviewOpen(false)}
                    readOnly
                />
            )}
        </>
    );
}