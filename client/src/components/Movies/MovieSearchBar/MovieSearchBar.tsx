import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

import styles from "./MovieSearchBar.module.css";

interface SearchBarProps {
    query: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function MovieSearchBar({ query, onChange, placeholder }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.wrapper} onClick={() => inputRef.current?.focus()}>
            <RiSearchLine className={styles.icon} />
            <input
                ref={inputRef}
                className={styles.input}
                type="text"
                value={query}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                spellCheck={false}
            />
            {query && (
                <button className={styles.clear} onClick={() => onChange("")}>
                    <RiCloseLine />
                </button>
            )}
        </div>
    );
}