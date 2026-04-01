import styles from "./Login.module.css";
import {Link} from "react-router";
import {type FormEvent, useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (data: any) => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const formData = {email, password}
        handleLogin(formData);
    }

    return (
        <div className={styles.page}>

            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.recBadge}>● REC</span>
                    <h1 className={styles.logo} data-text="CINELOG">CINELOG</h1>
                    <p className={styles.tagline}>// USER_AUTHENTICATION.exe</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardCornerTL}/>
                    <div className={styles.cardCornerTR}/>
                    <div className={styles.cardCornerBL}/>
                    <div className={styles.cardCornerBR}/>

                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>SIGN IN</span>
                        <span className={styles.cardLine}/>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">
                                <span className={styles.labelPrefix}>01 /</span> EMAIL
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={styles.input}
                                placeholder="user@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="password">
                                <span className={styles.labelPrefix}>02 /</span> PASSWORD
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className={styles.input}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className={styles.btn}>
                            <span>ACCESS VAULT</span>
                            <span className={styles.btnArrow}>▶▶</span>
                        </button>

                    </form>

                    <div className={styles.footer}>
                        <span className={styles.footerText}>NO TAPE YET?</span>
                        <Link to="/register" className={styles.footerLink}>REGISTER →</Link>
                    </div>

                </div>

                <div className={styles.statusBar}>
                    <span>SYS:READY</span>
                    <span className={styles.statusDivider}>◈</span>
                    <span>MEM:OK</span>
                    <span className={styles.statusDivider}>◈</span>
                    <span className={styles.statusBlink}>● REC</span>
                </div>

            </div>
        </div>
    );
}