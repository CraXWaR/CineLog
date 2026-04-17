import styles from './StatsBar.module.css';

export interface StatItem {
    label: string;
    value: string;
    tone: 'cyan' | 'pink' | 'yellow' | 'purple';
}

interface Props {
    stats?: StatItem[];
}

const defaultStats: StatItem[] = [
    { label: 'Movies Logged', value: '184', tone: 'cyan' },
    { label: 'Reviews', value: '73', tone: 'pink' },
    { label: 'Avg Rating', value: '4.2', tone: 'yellow' },
    { label: 'Watchlist', value: '29', tone: 'purple' },
];

export default function StatsBar({ stats: providedStats }: Props) {
    const stats = providedStats ?? defaultStats;

    return (
        <section className={styles.bar}>
            {stats.map((stat) => (
                <article key={stat.label} className={styles.stat}>
                    <p className={styles.label}>{stat.label}</p>
                    <p className={`${styles.value} ${styles[stat.tone]}`}>{stat.value}</p>
                </article>
            ))}
        </section>
    );
}
