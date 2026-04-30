import type {UserResponse} from "../../types/user.type.ts";
import type {PublicProfile} from "../../types/publicProfile.type.ts";

import styles from "./ProfileHeader.module.css";

interface ProfileHeaderProps {
    profile: PublicProfile;
    isOwnProfile: boolean;
    user: UserResponse | null;
    friendsCount: number;
    status: string | null;
    loadingFriendRequest: boolean;
    statusLoading: boolean;
    onSendRequest: () => void;
    onRemoveRequest: () => void;
    onAcceptRequest: () => void;
    onRemoveFriend: () => void;
}

export default function ProfileHeader({profile, isOwnProfile, user,
                                          friendsCount, status, loadingFriendRequest, statusLoading, onSendRequest,
                                          onRemoveRequest, onAcceptRequest, onRemoveFriend}: ProfileHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>{profile.username.slice(0, 2).toUpperCase()}</div>
                <div>
                    <h1 className={styles.username}>{profile.username}</h1>
                    {isOwnProfile && <span className={styles.email}>{user!.email}</span>}
                </div>
            </div>

            {!isOwnProfile && user && (
                <div className={styles.friendActionButtons}>
                    <button
                        className={`btn ${
                            status === "pending" ? "btn--ghost" :
                                status === "accepted" ? `btn--primary ${styles.friendBtn}` : "btn--secondary"}`}
                        onClick={
                            status === "pending" ? onRemoveRequest
                                : status === "received" ? onAcceptRequest
                                    : status === "accepted" ? onRemoveFriend
                                        : onSendRequest
                        }
                        disabled={loadingFriendRequest || statusLoading}>
                        {statusLoading ? "..."
                            : status === "pending" ? "⏳ PENDING"
                                : status === "received" ? "✓ ACCEPT"
                                    : status === "accepted" ? (
                                            <>
                                                <span className={styles.friendBtnText}>✓ FRIENDS</span>
                                                <span className={styles.friendBtnHover}>✗ UNFRIEND</span>
                                            </>
                                        )
                                        : loadingFriendRequest ? "SENDING..."
                                            : "+ ADD FRIEND"}
                    </button>
                    {status === "received" && (
                        <button className="btn btn--ghost" onClick={onRemoveRequest} disabled={loadingFriendRequest}>
                            ✗ DECLINE
                        </button>
                    )}
                </div>
            )}

            {isOwnProfile && (
                <span className={styles.badge}>{friendsCount} friends</span>
            )}
        </header>
    );
}