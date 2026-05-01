import {Link} from "react-router";
import type {Friend} from "../../../types/friend.type.ts";

import styles from "./FriendCard.module.css";

interface FriendProps {
    friend: Friend;
}

export default function FriendCard({ friend }: FriendProps) {
    return (
        <Link to={`/profile/${friend.publicId}`} className={`${styles.card}`}>
            <span className={styles.avatar}>{friend.username.slice(0, 2).toUpperCase()}</span>
            <span className={styles.username}>{friend.username}</span>
        </Link>
    );
}