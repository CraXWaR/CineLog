import FriendCard from "./subComponents/FriendCard.tsx";
import type {Friend} from "../../types/friend.type.ts";

import styles from "./FriendsSidebar.module.css";

interface FriendsSidebarProps {
    friends: Friend[];
}

export default function FriendsSidebar({ friends }: FriendsSidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Friends</h2>
            <ul className={styles.friendList}>
                {friends.map((friend) => (
                    <FriendCard
                        key={friend.publicId}
                        friend={friend}
                    />
                ))}
            </ul>
        </aside>
    );
}