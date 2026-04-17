import styles from './ProfileIdentity.module.css';

export interface ProfileUser {
    name: string;
    username: string;
    bio: string;
    initials: string;
    favoriteGenres: string[];
}

interface Props {
    user: ProfileUser;
}

export function ProfileIdentity({ user }: Props) {
    return (
        <section className={styles.card}>
            <div className={styles.avatar}>{user.initials}</div>

            <div className={styles.meta}>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.username}>@{user.username}</p>
                <p className={styles.bio}>{user.bio}</p>

                <div className={styles.genreRow}>
                    {user.favoriteGenres.map((genre) => (
                        <span key={genre} className={styles.genreTag}>
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
