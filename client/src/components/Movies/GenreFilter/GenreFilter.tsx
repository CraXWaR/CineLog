import {useEffect, useRef, useState} from "react";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import styles from "./GenreFilter.module.css";

type Genre = {
    id: number;
    name: string;
};

type GenreDropdownProps = {
    genres: Genre[];
    selectedGenres: number[];
    onToggle: (id: number) => void;
    onOpen: () => void;
    onClear: () => void;
    onClose: () => void;
};

export default function GenreFilter({genres, selectedGenres, onToggle, onOpen, onClear, onClose}: GenreDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                onClose();
            }
        };

        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    const handleOpen = () => {
        setIsOpen(true);
        onOpen();
    };

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <button className={styles.trigger} onClick={() => isOpen ? handleClose() : handleOpen()}>
                <span className={styles.triggerLabel}>
                    Selected:{" "}
                    {selectedGenres.length > 0 && (
                        <span className={styles.triggerCount}>{selectedGenres.length || 0}</span>
                    )}
                </span>
                {isOpen ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                        {selectedGenres.length > 0 && (
                            <button className={styles.clearBtn} onClick={onClear}>CLEAR ALL</button>
                        )}
                    </div>

                    <ul className={styles.list}>
                        {genres.map((genre) => {
                            const isChecked = selectedGenres.includes(genre.id);
                            return (
                                <li key={genre.id}>
                                    <label className={`${styles.label} ${isChecked ? styles.labelActive : ""}`}>
                                        <input
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={isChecked}
                                            onChange={() => onToggle(genre.id)}
                                        />
                                        <span className={styles.customCheck}>
                                            {isChecked && <span className={styles.checkMark}>✔</span>}
                                        </span>
                                        <span className={styles.genreName}>{genre.name}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}