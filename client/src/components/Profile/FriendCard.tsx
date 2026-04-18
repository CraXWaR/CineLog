import styles from "./FriendCard.module.css";

interface Props {
    friend: { id: string; username: string; avatar: string };
    active: boolean;
    onClick: () => void;
}

export default function FriendCard({ friend, active, onClick }: Props) {
    return (
        <li className={`${styles.card} ${active ? styles.active : ""}`} onClick={onClick}>
            <div className={styles.avatar}>{friend.avatar}</div>
            <span className={styles.username}>{friend.username}</span>
        </li>
    );
}