import React, { useState, useRef, useEffect } from "react";
import {fetchMovieGenres} from "../../services/movies.service.ts";
import {useAiSuggest} from "../../hooks/useAiSuggest.ts";
import { FaWandMagicSparkles, FaPlay, FaRegGem } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";

import type {Genre} from "../../types/movies.type.ts";

import MovieGrid from "../../components/Movies/MovieGrid/MovieGrid.tsx";
import Loading from "../../components/UI/Loading/Loading.tsx";
import Error from "../../components/UI/Error/Error.tsx";

import styles from "./AiSuggest.module.css";

export default function AiSuggestPage() {
    const { movies, loading, error, hasSearched, suggest } = useAiSuggest();
    const [prompt, setPrompt] = useState("");
    const [genres, setGenres] = useState<Genre[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchMovieGenres().then(setGenres).catch(() => {});
    }, []);

    const suggestions = [
        "Vikings & Norse mythology",
        "Mind-bending sci-fi like Interstellar",
        "90s street racing adrenaline",
        "Slow burn psychological thriller",
    ];

    const handleSubmit = () => suggest(prompt);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSubmit();
    };

    const handleSuggestion = (text: string) => {
        setPrompt(text);
        inputRef.current?.focus();
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <p className={styles.headerLabel}><RiRobot2Line /> // AI MOVIE ORACLE</p>

                <h1 className={styles.title} data-text="WHAT DO YOU WANT TO WATCH?">
                    WHAT DO YOU WANT TO WATCH?
                </h1>
                <p className={styles.subtitle}>
                    Describe a mood, a saga, a feeling — the oracle will find your next obsession
                </p>
            </div>

            <div className={styles.searchWrapper}>
                <div className={styles.searchBox}>
                    <FaPlay className={styles.cursor} />
                    <input
                        ref={inputRef}
                        className={styles.input}
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. I loved Vikings series, want something similar..."
                        disabled={loading}
                        autoFocus
                    />
                    <button
                        className={styles.submitBtn}
                        onClick={handleSubmit}
                        disabled={loading || !prompt.trim()}>
                        {loading ? <span className={styles.loadingDots}><span/><span/><span/></span> : <><FaWandMagicSparkles /> SUGGEST</>}
                    </button>
                </div>

                <div className={styles.chips}>
                    {suggestions.map((suggestion) => (
                        <button key={suggestion} className={styles.chip} onClick={() => handleSuggestion(suggestion)}>
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>

            {loading && (
                <Loading text={'QUERYING THE ARCHIVE...'} />
            )}

            {error && !loading && (
               <Error text={error} />
            )}

            {!loading && !error && hasSearched && (
                <div className={styles.results}>
                    <div className={styles.resultsHeader}>
                        <span className={styles.resultsLabel}>// ORACLE RESULTS</span>
                        <span className={styles.resultsCount}>{movies.length} TITLES FOUND</span>
                    </div>

                    <MovieGrid movies={movies} genres={genres} />
                </div>
            )}

            {!hasSearched && !loading && (
                <div className={styles.emptyState}>
                    <FaRegGem className={styles.emptyIcon} />
                    <p className={styles.emptyText}>AWAITING INPUT...</p>
                </div>
            )}
        </div>
    );
}