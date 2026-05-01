import { useState } from "react";
import { MdVideocamOff } from "react-icons/md";

import type { Movie, Genre } from "../../types/movies.type.ts";
import type {Friend} from "../../types/friend.type.ts";

import MovieRow from "./subComponents/MovieRow.tsx";
import FriendCard from "./subComponents/FriendCard.tsx";

import styles from "./MovieSection.module.css";

interface MovieSectionProps {
    friends: Friend[];
    watched: Movie[];
    watchLater: Movie[];
    genres: Genre[];
    onMovieClick: (movie: Movie) => void;
}

export default function MovieSection({ friends, watched, watchLater, genres, onMovieClick }: MovieSectionProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <main className={styles.main}>
            <button
                className={styles.dropdownTrigger}
                onClick={() => setDropdownOpen((o) => !o)}
                aria-expanded={dropdownOpen}
            >
                <span>FRIENDS</span>
                <span className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}>▾</span>
            </button>

            {dropdownOpen && (
                <div className={styles.dropdown}>
                    <ul className={styles.dropdownList}>
                        {friends.map((friend) => (
                            <FriendCard
                                key={friend.publicId}
                                friend={friend}
                            />
                        ))}
                    </ul>
                </div>
            )}

            {watched.length === 0 && watchLater.length === 0 ? (
                <div className={styles.empty}>
                    <MdVideocamOff className={styles.emptyIcon}/>
                    <p className={styles.emptyText}>NO SIGNAL</p>
                    <p className={styles.emptySubtext}>// NO MOVIES FOUND IN THIS TAPE</p>
                </div>
            ) : (
                <>
                    <MovieRow title="Recently Watched" icon="🎬" movies={watched} genres={genres} onMovieClick={onMovieClick}/>
                    <MovieRow title="Watch Later" icon="🕐" movies={watchLater} genres={genres} onMovieClick={onMovieClick}/>
                </>
            )}
        </main>
    );
}