import styles from './ProfilePage.module.css';
import { ProfileBanner } from '../../components/Profile/ProfileBanner.tsx';
import { ProfileIdentity, type ProfileUser } from '../../components/Profile/ProfileIdentity.tsx';
import StatsBar, { type StatItem } from '../../components/Profile/StatsBar.tsx';
import { MovieList, type MovieListItem } from '../../components/Profile/MovieList.tsx';
import { ReviewList, type ReviewItem } from '../../components/Profile/ReviewList.tsx';
import { WatchLater, type WatchLaterItem } from '../../components/Profile/WatchLater.tsx';
import { FriendsSidebar } from '../../components/Profile/FriendsSidebar.tsx';
import { GenreSidebar } from '../../components/Profile/GenreSidebar.tsx';
import { ActivityLog } from '../../components/Profile/ActivityLog.tsx';

const mockUser: ProfileUser = {
    name: 'Cine Tapewalker',
    username: 'tapewalker',
    bio: 'Collector of midnight sci-fi and practical-effect thrillers.',
    initials: 'CT',
    favoriteGenres: ['Sci-Fi', 'Thriller', 'Crime'],
};

const mockStats: StatItem[] = [
    { label: 'Movies Logged', value: '184', tone: 'cyan' },
    { label: 'Reviews', value: '73', tone: 'pink' },
    { label: 'Avg Rating', value: '4.2', tone: 'yellow' },
    { label: 'Watchlist', value: '29', tone: 'purple' },
];

const mockRecentlyWatched: MovieListItem[] = [
    { id: 1, title: 'Blade Runner 2049', year: 2017, rating: 4.6, posterIcon: '\u{1F39E}' },
    { id: 2, title: 'Heat', year: 1995, rating: 4.4, posterIcon: '\u{1F3AC}' },
    { id: 3, title: 'Ex Machina', year: 2014, rating: 4.1, posterIcon: '\u{1F4FD}' },
];

const mockReviews: ReviewItem[] = [
    {
        id: 1,
        movieTitle: 'Whiplash',
        rating: 4.9,
        excerpt: 'Relentless pace, sharp editing, and one of the best final scenes ever.',
        postedAt: '2 days ago',
    },
    {
        id: 2,
        movieTitle: 'Arrival',
        rating: 4.7,
        excerpt: 'Smart science fiction with emotional weight and stunning atmosphere.',
        postedAt: '5 days ago',
    },
];

const mockWatchLater: WatchLaterItem[] = [
    { id: 1, title: 'Memento', year: 2000, runtime: 113, posterIcon: '\u{1F3A5}', priority: 'high' },
    { id: 2, title: 'Drive', year: 2011, runtime: 100, posterIcon: '\u{1F4FA}', priority: 'normal' },
    { id: 3, title: 'Children of Men', year: 2006, runtime: 109, posterIcon: '\u{1F3AC}', priority: 'normal' },
];

const mockFriends = [
    {
        id: 1,
        initials: 'AJ',
        username: 'AnalogJunkie',
        lastActivity: 'Rated The Matrix 5 stars',
        isOnline: true,
        colorClass: 'cyan',
    },
    {
        id: 2,
        initials: 'VX',
        username: 'VHSVortex',
        lastActivity: 'Added Heat to watchlist',
        isOnline: false,
        colorClass: 'pink',
    },
    {
        id: 3,
        initials: 'RN',
        username: 'RetroNights',
        lastActivity: 'Reviewed Interstellar',
        isOnline: true,
        colorClass: 'purple',
    },
] as const;

const mockGenres = [
    { name: 'Sci-Fi', count: 42, isTop: true },
    { name: 'Thriller', count: 27, isTop: true },
    { name: 'Drama', count: 19, isTop: false },
    { name: 'Crime', count: 16, isTop: false },
];

const mockActivity = [
    { id: 1, type: 'watched', movieTitle: 'Blade Runner 2049', timestamp: '2 hours ago' },
    { id: 2, type: 'reviewed', movieTitle: 'Whiplash', timestamp: 'yesterday' },
    { id: 3, type: 'liked', movieTitle: 'Arrival', timestamp: '2 days ago' },
    { id: 4, type: 'queued', movieTitle: 'Memento', timestamp: '3 days ago' },
] as const;

export default function ProfilePage() {
    return (
        <div className={styles.root}>
            <ProfileBanner />

            <main className={styles.main}>
                <ProfileIdentity user={mockUser} />
                <StatsBar stats={mockStats} />

                <div className={styles.grid}>
                    <div className={styles.left}>
                        <MovieList movies={mockRecentlyWatched} />
                        <ReviewList reviews={mockReviews} />
                        <WatchLater movies={mockWatchLater} />
                    </div>

                    <aside className={styles.right}>
                        <FriendsSidebar friends={[...mockFriends]} totalCount={14} />
                        <GenreSidebar genres={mockGenres} />
                        <ActivityLog items={[...mockActivity]} />
                    </aside>
                </div>
            </main>
        </div>
    );
}
