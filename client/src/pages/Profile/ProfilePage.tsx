import { useState } from "react";
import type { Movie, Genre } from "../../types/movies.type.ts";

import FriendCard from "../../components/Profile/FriendCard.tsx";
import MovieRow from "../../components/Profile/MovieRow.tsx";
import MovieModal from "../../components/Movies/MovieModal/MovieModal.tsx";

import styles from "./ProfilePage.module.css";

//TODO FEAT REAL DATA INSTEAD OF AI GENERATED DUMMY DATA
const GENRES: Genre[] = [
    { id: 28,    name: "Action" },
    { id: 18,    name: "Drama" },
    { id: 878,   name: "Sci-Fi" },
    { id: 35,    name: "Comedy" },
    { id: 53,    name: "Thriller" },
    { id: 10749, name: "Romance" },
    { id: 27,    name: "Horror" },
    { id: 12,    name: "Adventure" },
];
const CURRENT_USER = {
    id: "u-001",
    username: "aleksander_v",
    email: "alex@example.com",
};
const FRIENDS = [
    { id: "u-002", username: "marina_k",  avatar: "MK" },
    { id: "u-003", username: "dmitri_p",  avatar: "DP" },
    { id: "u-004", username: "sofia_l",   avatar: "SL" },
];
const RECENTLY_WATCHED: Record<string, Movie[]> = {
    "u-002": [
        { id: 693134, title: "Dune: Part Two",    overview: "Follow the mythic journey of Paul Atreides.",           poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg", release_date: "2024-03-01", vote_average: 8.5, genre_ids: [878, 12, 28] },
        { id: 792307, title: "Poor Things",       overview: "An extraordinary story of a young woman brought back.", poster_path: "/kCGlIMHnOm8JPXIf4KBsQdMXXJw.jpg", release_date: "2023-12-08", vote_average: 8.0, genre_ids: [35, 18] },
        { id: 872585, title: "Oppenheimer",       overview: "The story of J. Robert Oppenheimer's role.",            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", release_date: "2023-07-19", vote_average: 8.9, genre_ids: [18, 53] },
    ],
    "u-003": [
        { id: 719221, title: "The Zone of Interest", overview: "A Nazi commandant and his wife build a life.",       poster_path: "/hUu9zyZmKuTfAUHfMWr7mnzjkbY.jpg", release_date: "2023-12-15", vote_average: 7.4, genre_ids: [18] },
        { id: 1008042,title: "Talk to Me",           overview: "Teens discover how to conjure spirits.",             poster_path: "/kdPMUXXXC6xUNtc7Q8oE4ZTPBPL.jpg", release_date: "2023-07-28", vote_average: 7.2, genre_ids: [27, 53] },
    ],
    "u-004": [
        { id: 466420, title: "Killers of the Flower Moon", overview: "Members of the Osage Nation are murdered.",   poster_path: "/dB6jqqI3XjMF4GBFkFqNTuHIhqp.jpg", release_date: "2023-10-20", vote_average: 7.6, genre_ids: [18, 53] },
        { id: 1188759,title: "Saltburn",                   overview: "A student is invited to a classmate's estate.",poster_path: "/qjhahNLSZ705B5JP92YMEYPocPz.jpg", release_date: "2023-11-17", vote_average: 7.1, genre_ids: [53, 18] },
    ],
};
const WATCH_LATER: Record<string, Movie[]> = {
    "u-002": [
        { id: 1014073, title: "Civil War",    overview: "A journey across a war-torn America.",         poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg", release_date: "2024-04-12", vote_average: 7.0, genre_ids: [28, 18] },
        { id: 1096197, title: "Monkey Man",   overview: "A young man seeks revenge on corrupt leaders.", poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg", release_date: "2024-04-05", vote_average: 6.8, genre_ids: [28] },
    ],
    "u-003": [
        { id: 786892, title: "Furiosa",        overview: "The origin story of Furiosa.",                poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg", release_date: "2024-05-24", vote_average: 7.8, genre_ids: [28, 12] },
        { id: 1072790,title: "The Fall Guy",   overview: "A stuntman is drawn into a murder mystery.", poster_path: "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg", release_date: "2024-05-03", vote_average: 7.0, genre_ids: [28, 35] },
    ],
    "u-004": [
        { id: 653346, title: "Challengers",    overview: "A tennis coach, his wife, and her rival.",    poster_path: "/H6vke7zGiuLinpgAToUBEFVBbKm.jpg", release_date: "2024-04-26", vote_average: 7.4, genre_ids: [18, 10749] },
    ],
};

export default function ProfilePage() {
    const [selectedFriend, setSelectedFriend] = useState(FRIENDS[0].id);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const friend = FRIENDS.find((f) => f.id === selectedFriend)!;
    const watched = RECENTLY_WATCHED[selectedFriend] ?? [];
    const watchLater = WATCH_LATER[selectedFriend] ?? [];

    const handleFriendSelect = (id: string) => {
        setSelectedFriend(id);
        setDropdownOpen(false);
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>{CURRENT_USER.username.slice(0, 2).toUpperCase()}</div>
                    <div>
                        <h1 className={styles.username}>{CURRENT_USER.username}</h1>
                        <span className={styles.email}>{CURRENT_USER.email}</span>
                    </div>
                </div>
                <span className={styles.badge}>{FRIENDS.length} friends</span>
            </header>

            <div className={styles.layout}>
                {/* Desktop sidebar */}
                <aside className={styles.sidebar}>
                    <h2 className={styles.sidebarTitle}>Friends</h2>
                    <ul className={styles.friendList}>
                        {FRIENDS.map((friend) => (
                            <FriendCard
                                key={friend.id}
                                friend={friend}
                                active={friend.id === selectedFriend}
                                onClick={() => handleFriendSelect(friend.id)}
                            />
                        ))}
                    </ul>
                </aside>

                <main className={styles.main}>
                    <div className={styles.friendHeader}>
                        <div className={styles.friendAvatar}>{friend.avatar}</div>
                        <h2 className={styles.friendName}>{friend.username}</h2>

                        {/* Mobile dropdown trigger */}
                        <button
                            className={styles.dropdownTrigger}
                            onClick={() => setDropdownOpen((o) => !o)}
                            aria-expanded={dropdownOpen}
                        >
                            <span>FRIENDS</span>
                            <span className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}>▾</span>
                        </button>
                    </div>

                    {/* Mobile dropdown list */}
                    {dropdownOpen && (
                        <div className={styles.dropdown}>
                            <ul className={styles.dropdownList}>
                                {FRIENDS.map((friend) => (
                                    <FriendCard
                                        key={friend.id}
                                        friend={friend}
                                        active={friend.id === selectedFriend}
                                        onClick={() => handleFriendSelect(friend.id)}
                                    />
                                ))}
                            </ul>
                        </div>
                    )}

                    <MovieRow title="Recently Watched" icon="🎬" movies={watched} genres={GENRES} onMovieClick={setSelectedMovie} />
                    <MovieRow title="Watch Later" icon="🕐" movies={watchLater} genres={GENRES} onMovieClick={setSelectedMovie} />
                </main>
            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    genres={GENRES}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
}