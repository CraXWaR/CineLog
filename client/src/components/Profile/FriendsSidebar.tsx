import { useState } from "react";
import FriendCard from "./subComponents/FriendCard.tsx";

import styles from "./FriendsSidebar.module.css";

type Friend = { id: string; username: string; avatar: string };

interface FriendsSidebarProps {
    friends: Friend[];
}

export default function FriendsSidebar({ friends }: FriendsSidebarProps) {
    const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Friends</h2>
            <ul className={styles.friendList}>
                {friends.map((friend) => (
                    <FriendCard
                        key={friend.id}
                        friend={friend}
                        active={friend.id === selectedFriend}
                        onClick={() => setSelectedFriend(friend.id)}
                    />
                ))}
            </ul>
        </aside>
    );
}