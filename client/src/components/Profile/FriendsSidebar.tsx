import styles from './FriendsSidebar.module.css';

type FriendColorClass = 'cyan' | 'pink' | 'purple' | 'yellow';

interface FriendItem {
    id: string | number;
    initials: string;
    username: string;
    lastActivity: string;
    isOnline: boolean;
    colorClass: FriendColorClass;
}

interface Props {
    friends: FriendItem[];
    totalCount: number;
}

export function FriendsSidebar({ friends, totalCount }: Props) {
    return (
        <section aria-label={`Friends (${totalCount})`}>
            <ul className={styles.list}>
                {friends.map((friend) => (
                    <li key={friend.id} className={styles.row}>
                        <div className={`${styles.avatar} ${styles[friend.colorClass]}`}>
                            {friend.initials}
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>{friend.username}</p>
                            <p className={styles.activity}>{friend.lastActivity}</p>
                        </div>

                        <span className={styles.dot} data-online={friend.isOnline} />
                    </li>
                ))}
            </ul>

            <div className={styles.tapeDivider}>
                <span className={styles.tapeLine} />
                <span className={styles.tapeIcon}>{'\u25C8'}</span>
                <span className={styles.tapeLine} />
            </div>
        </section>
    );
}
