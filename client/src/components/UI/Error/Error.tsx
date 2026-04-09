import {RiErrorWarningLine} from "react-icons/ri";

import styles from "./Error.module.css";

interface ErrorProps {
    text: string;
}

export default function Error({text}: ErrorProps) {
    return (
        <div className={styles.error}>
            <RiErrorWarningLine className={styles.errorIcon}/>
            <span className={styles.errorText}>{text}</span>
        </div>
    );
}