import { useState } from "react";
import type { Movie } from "../../types/movies.type.ts";

import FriendCard from "../../components/Profile/FriendCard.tsx";
import MovieRow from "../../components/Profile/MovieRow.tsx";
import MovieModal from "../../components/Movies/MovieModal/MovieModal.tsx";
import Error from "../../components/UI/Error/Error.tsx";
import Loading from "../../components/UI/Loading/Loading.tsx";

import {useAuth} from "../../context/auth.context.tsx";
import {useProfileMovies} from "../../hooks/useProfileMovies.ts";

import styles from "./ProfilePage.module.css";

//TODO FEAT REAL DATA INSTEAD OF AI GENERATED DUMMY DATA
const FRIENDS = [
    { id: "u-002", username: "marina_k",  avatar: "MK" },
    { id: "u-003", username: "dmitri_p",  avatar: "DP" },
    { id: "u-004", username: "sofia_l",   avatar: "SL" },
];

export default function ProfilePage() {
    const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const {user} = useAuth();
    if (!user) return <Error text="// ACCESS DENIED — YOU MUST BE LOGGED IN"/>;
    const {watched, watchLater, genres, loading, error} = useProfileMovies(user);

    const friend = FRIENDS.find((f) => f.id === selectedFriend) ?? null;
    const handleFriendSelect = (id: string) => {
        setSelectedFriend(id);
        setDropdownOpen(false);
    };

    if (error) return <Error text={error}/>;
    if (loading) return <Loading text="Loading profile..."/>;

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>{user.username.slice(0, 2).toUpperCase()}</div>
                    <div>
                        <h1 className={styles.username}>{user.username}</h1>
                        <span className={styles.email}>{user.email}</span>
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
                    {/* Mobile dropdown trigger */}
                    <button
                        className={styles.dropdownTrigger}
                        onClick={() => setDropdownOpen((o) => !o)}
                        aria-expanded={dropdownOpen}
                    >
                        <span>FRIENDS</span>
                        <span className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}>▾</span>
                    </button>

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

                    {friend && (
                        <div className={styles.friendHeader}>
                            <div className={styles.friendAvatar}>{friend.avatar}</div>
                            <h2 className={styles.friendName}>{friend.username}</h2>
                        </div>
                    )}

                    <MovieRow title="Recently Watched" icon="🎬" movies={watched} genres={genres} onMovieClick={setSelectedMovie}/>
                    <MovieRow title="Watch Later" icon="🕐" movies={watchLater} genres={genres} onMovieClick={setSelectedMovie}/>
                </main>
            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    genres={genres}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
}