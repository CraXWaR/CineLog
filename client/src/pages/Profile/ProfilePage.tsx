import styles from "./ProfilePage.module.css";
import ProfileHero from "../../components/Profile/ProfileHero.tsx";
import StatsBar from "../../components/Profile/StatsBar.tsx";
import RecentActivity from "../../components/Profile/RecentActivity.tsx";
import FriendsPanel from "../../components/Profile/FriendsPanel.tsx";

export default function ProfilePage() {
    return (
        <div className={styles.page}>
            <ProfileHero />
            <StatsBar />

            <div className={styles.content}>
                <RecentActivity />
                <FriendsPanel />
            </div>
        </div>
    );
}