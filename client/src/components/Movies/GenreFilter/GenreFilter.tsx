import {useState} from "react";
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
    onClear: () => void;
};

export default function GenreFilter({genres, selectedGenres, onToggle, onClear}: GenreDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
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