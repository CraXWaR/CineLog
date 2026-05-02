import {useAllActivitiesFeed} from "../../hooks/useAllActivitiesFeed.ts";

import ActivityEntryCard from "../../components/ActivityEntry/ActivityEntryCard.tsx";
import Loading from "../../components/UI/Loading/Loading.tsx";
import Error from "../../components/UI/Error/Error.tsx";
import CustomPagination from "../../components/UI/CustomPagination/CustomPagination.tsx";

import styles from "./ActivityFeedPage.module.css";

export default function ActivityFeedPage() {
    const { activities, totalPages, page, setPage, loading, error } = useAllActivitiesFeed();

    if (loading) return <Loading text="Loading activities..." />
    if (error) return <Error text={error} />

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerTop}>
                        <span className={styles.label}>// GLOBAL FEED</span>
                        <span className={styles.liveBadge}>● LIVE</span>
                    </div>
                    <h1 className={styles.title}>ACTIVITY</h1>
                    <p className={styles.subtitle}>Every watch. Every review. In real time.</p>
                    <div className={styles.headerLine} />
                </div>

                {!loading && !error && activities.length === 0 && (
                    <div className={styles.state}>
                        <span className={styles.stateLabel}>// NO ACTIVITY YET</span>
                    </div>
                )}

                {!loading && !error && activities.length > 0 && (
                    <div className={styles.feed}>
                        <div className={styles.feedMeta}>
                            <span className={styles.feedCount}>{activities.length} ENTRIES</span>
                        </div>
                        {activities.map((activity) => (
                            <ActivityEntryCard key={activity.id} activity={activity} />
                        ))}
                    </div>
                )}

                {!loading && totalPages > 1 && (
                    <CustomPagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                    />
                )}
            </div>
        </main>
    );
}