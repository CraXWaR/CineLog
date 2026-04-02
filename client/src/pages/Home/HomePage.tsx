import Hero from "../../components/Home/Hero.tsx";
import Features from "../../components/Home/Features.tsx";
import ActivityPreview from "../../components/Home/ActivityPreview.tsx";

import styles from "./HomePage.module.css";

export default function Home() {
    return (
        <main className={styles.page}>
            <Hero/>
            <Features/>
            <ActivityPreview/>
        </main>
    );
}