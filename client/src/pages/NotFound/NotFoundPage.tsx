import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { LuFilm, LuHouse, LuArrowLeft } from "react-icons/lu";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const staticRef = useRef<HTMLDivElement>(null);

  // Randomise static noise position on interval for authentic VHS feel
  useEffect(() => {
    const el = staticRef.current;
    if (!el) return;
    const id = setInterval(() => {
      el.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.static} ref={staticRef} aria-hidden="true" />

      <div className={styles.glitchBars} aria-hidden="true">
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </div>

      <main className={styles.content}>
        <p className={styles.tracking} aria-hidden="true">
          TRACKING ERROR ▮▮▮▯▯ CH.404
        </p>

        <div className={styles.errorCode} aria-label="404">
          <span className={styles.digit} data-text="4">
            4
          </span>
          <span className={styles.digitCenter} data-text="0">
            <LuFilm className={styles.filmIcon} aria-hidden="true" />
            <span className={styles.zeroText} aria-hidden="true">
              0
            </span>
          </span>
          <span className={styles.digit} data-text="4">
            4
          </span>
        </div>

        <h1 className={styles.headline}>TAPE NOT FOUND</h1>

        <p className={styles.sub}>
          The reel you&apos;re looking for has been rewound, ejected, or never
          existed in our library.
        </p>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond}>◈</span>
          <span className={styles.dividerLine} />
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => navigate("/")}>
            <LuHouse size={16} aria-hidden="true" />
            Go Home
          </button>
          <button className={styles.btnSecondary} onClick={() => navigate(-1)}>
            <LuArrowLeft size={16} aria-hidden="true" />
            Go Back
          </button>
        </div>

        <p className={styles.timestamp} aria-hidden="true">
          REC ● SP ■ {new Date().toLocaleTimeString()} ── 00:00:00:00
        </p>
      </main>
    </div>
  );
}
