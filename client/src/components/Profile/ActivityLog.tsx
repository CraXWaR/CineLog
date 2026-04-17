import styles from './ActivityLog.module.css';

type ActivityType = 'watched' | 'reviewed' | 'liked' | 'queued';
type ActivityColorClass = 'cyan' | 'pink' | 'yellow' | 'purple';

interface ActivityItem {
    id: string | number;
    type: ActivityType;
    movieTitle: string;
    timestamp: string;
}

interface Props {
    items: ActivityItem[];
}

interface ActivityMeta {
    icon: string;
    verb: string;
    colorClass: ActivityColorClass;
}

const ACTIVITY_META: Record<ActivityType, ActivityMeta> = {
    watched: { icon: '\u25B6', verb: 'Watched', colorClass: 'cyan' },
    reviewed: { icon: '\u270D', verb: 'Reviewed', colorClass: 'pink' },
    liked: { icon: '\u2665', verb: 'Liked', colorClass: 'yellow' },
    queued: { icon: '\u23F1', verb: 'Queued', colorClass: 'purple' },
};

export function ActivityLog({ items }: Props) {
    return (
        <section>
            <ul className={styles.list}>
                {items.map((item) => {
                    const meta = ACTIVITY_META[item.type];
                    return (
                        <li key={item.id} className={styles.item}>
                            <span className={`${styles.icon} ${styles[meta.colorClass]}`}>
                                {meta.icon}
                            </span>
                            <div className={styles.content}>
                                <p className={styles.text}>
                                    {meta.verb}{' '}
                                    <span className={styles.movieTitle}>{item.movieTitle}</span>
                                </p>
                                <p className={styles.timestamp}>{item.timestamp}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
