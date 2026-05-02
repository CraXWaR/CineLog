import {useActivityFeed} from "../../hooks/useActivityFeed.ts";

import ActivityEntryCard from "../ActivityEntry/ActivityEntryCard.tsx";
import Loading from "../UI/Loading/Loading.tsx";
import Error from "../UI/Error/Error.tsx";

import styles from "./ActivityPreview.module.css";

export default function ActivityPreview() {
    const { activities, loading, error } = useActivityFeed();

    if (loading) return <Loading text="Loading activity feed..." />
    if (error) return <Error text={error} />

    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>// LIVE FEED</span>
                <div className={styles.sectionLine} />
                <span className={styles.liveBadge}>● LIVE</span>
            </div>

            <div className={styles.feed}>
                {activities.map((activity) => (
                    <ActivityEntryCard key={activity.id} activity={activity} />
                ))}
            </div>
        </section>
    );
}