import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import styles from "./CustomPagination.module.css";

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function CustomPagination({currentPage, totalPages, onPageChange}: CustomPaginationProps) {
    const getPages = (): (number | "...")[] => {
        const pages: (number | "...")[] = [];

        if (totalPages <= 7) {
            return Array.from({length: totalPages}, (_, i) => i + 1);
        }

        pages.push(1);

        if (currentPage > 3) pages.push("...");

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) pages.push(i);

        if (currentPage < totalPages - 2) pages.push("...");

        pages.push(totalPages);

        return pages;
    };

    const handleChange = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange(page);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <nav className={styles.pagination} aria-label="Pagination">
            <button
                className={styles.arrow}
                onClick={() => handleChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page">
                <MdChevronLeft size={20}/>
            </button>

            <div className={styles.pages}>
                {getPages().map((page, i) =>
                    page === "..." ? (
                        <span key={`ellipsis-${i}`} className={styles.ellipsis}>
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            className={`${styles.page} ${page === currentPage ? styles.active : ""}`}
                            onClick={() => handleChange(page as number)}
                            aria-label={`Page ${page}`}
                            aria-current={page === currentPage ? "page" : undefined}>
                            {page}
                        </button>
                    )
                )}
            </div>

            <button
                className={styles.arrow}
                onClick={() => handleChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page">
                <MdChevronRight size={20}/>
            </button>
        </nav>
    );
}