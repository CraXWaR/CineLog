import {useState} from "react";

import FriendCard from "./subComponents/FriendCard.tsx";

import type {Friend} from "../../types/friend.type.ts";

import styles from "./FriendsSidebar.module.css";

interface FriendsSidebarProps {
    friends: Friend[];
}

export default function FriendsSidebar({ friends }: FriendsSidebarProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const friendList = friends.length === 0 ? (
        <p className={styles.noFriends}>// NO FRIENDS YET</p>
    ) : (
        friends.map((friend) => (
            <FriendCard key={friend.publicId} friend={friend} />
        ))
    );

    return (
        <>
            {/* Desktop sidebar */}
            <aside className={styles.sidebar}>
                <h2 className={styles.sidebarTitle}>// Friends</h2>
                <ul className={styles.friendList}>
                    {friendList}
                </ul>
            </aside>

            {/* Mobile dropdown */}
            <div className={styles.mobileWrapper}>
                <button
                    className={styles.dropdownTrigger}
                    onClick={() => setDropdownOpen(o => !o)}
                    aria-expanded={dropdownOpen}
                >
                    <span>FRIENDS</span>
                    <span className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}>▾</span>
                </button>

                {dropdownOpen && (
                    <div className={styles.dropdown}>
                        <ul className={styles.dropdownList}>
                            {friendList}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}