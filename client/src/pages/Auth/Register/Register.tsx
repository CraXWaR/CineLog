import styles from "./Register.module.css";
import {Link} from "react-router";
import React, {useState} from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (data: any) => {
        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {username, email, password, confirmPassword}
        handleRegister(formData);
    }

    return (
        <div className={styles.page}>

            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.recBadge}>● REC</span>
                    <h1 className={styles.logo} data-text="CINELOG">CINELOG</h1>
                    <p className={styles.tagline}>// NEW_USER_REGISTRATION.exe</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardCornerTL}/>
                    <div className={styles.cardCornerTR}/>
                    <div className={styles.cardCornerBL}/>
                    <div className={styles.cardCornerBR}/>

                    <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>CREATE ACCOUNT</span>
                        <span className={styles.cardLine}/>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="username">
                                <span className={styles.labelPrefix}>01 /</span> USERNAME
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className={styles.input}
                                placeholder="enter_username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">
                                <span className={styles.labelPrefix}>02 /</span> EMAIL
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
                                <span className={styles.labelPrefix}>03 /</span> PASSWORD
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

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="confirm-password">
                                <span className={styles.labelPrefix}>03 /</span> PASSWORD
                            </label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                className={styles.input}
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className={styles.btn}>
                            <span>INITIALIZE ACCOUNT</span>
                            <span className={styles.btnArrow}>▶▶</span>
                        </button>

                    </form>

                    <div className={styles.footer}>
                        <span className={styles.footerText}>ALREADY HAVE A TAPE?</span>
                        <Link to="/login" className={styles.footerLink}>SIGN IN →</Link>
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