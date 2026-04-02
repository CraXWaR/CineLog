import styles from "./Register.module.css";
import {Link} from "react-router";
import React, {useState} from "react";
import FormInput from "../../../components/FormInput/FormInput.tsx";

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

                        <FormInput label={"USERNAME"} value={username} onChange={(e) => setUsername(e.target.value)}
                                   id={username} name={username} prefix={"01"} placeholder={"enter_username"}
                                   variant={"register"}/>

                        <FormInput label={"EMAIL"} value={email} onChange={(e) => setEmail(e.target.value)} id={"email"}
                                   name={"email"} placeholder={"user@domain.com"} variant={"register"} prefix={"02"}/>

                        <FormInput label={"PASSWORD"} value={password} onChange={(e) => setPassword(e.target.value)}
                                   id={"password"} name={"password"} type={"password"} placeholder={"••••••••"}
                                   variant={"register"} prefix={"03"}/>

                        <FormInput label={"CONFIRM PASSWORD"} value={confirmPassword}
                                   onChange={(e) => setConfirmPassword(e.target.value)} id={"confirm-password"}
                                   name={"confirm-password"} type={"password"} placeholder={"••••••••"}
                                   variant={"register"} prefix={"04"}/>

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