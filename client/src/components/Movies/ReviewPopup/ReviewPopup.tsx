import styles from "./ReviewPopup.module.css";

interface ReviewPopupProps {
    reviewText: string;
    onChange?: (value: string) => void;
    onSave?: () => void;
    onCancel: () => void;
    loading?: boolean;
    readOnly?: boolean;
}

export default function ReviewPopup({reviewText, onChange, onSave, onCancel, loading, readOnly}: ReviewPopupProps) {
    return (
        <div className={styles.backdrop} onClick={onCancel}>
            <div className={styles.reviewPopup} onClick={e => e.stopPropagation()}>
                <span className={styles.label}>// {readOnly ? "REVIEW" : "YOUR REVIEW"}</span>
                <textarea
                    className={styles.reviewTextarea}
                    value={reviewText}
                    onChange={e => onChange?.(e.target.value)}
                    placeholder="Write your thoughts..."
                    rows={4}
                    readOnly={readOnly}
                />
                {!readOnly && (
                    <div className={styles.reviewActions}>
                        <button className="btn btn--primary" onClick={onSave} disabled={loading}>
                            {loading ? "SAVING..." : "SAVE"}
                        </button>
                        <button className="btn btn--ghost" onClick={onCancel}>
                            CANCEL
                        </button>
                    </div>
                )}
                {readOnly && (
                    <button className="btn btn--ghost" onClick={onCancel}>
                        CLOSE
                    </button>
                )}
            </div>
        </div>
    );
}