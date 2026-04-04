import {useState} from "react";
import {Link} from "react-router";
import FormInput from "../../../components/FormInput/FormInput.tsx";
import {
    RiSkipRightLine,
    RiCheckboxCircleLine,
    RiDatabase2Line,
    RiRecordCircleLine,
    RiLoginBoxLine
} from "react-icons/ri";

import {useRegister} from "../../../hooks/useAuth.ts";

import styles from "./Register.module.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {handleSubmit, errors} = useRegister();

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

                    <form className={styles.form}
                          onSubmit={(e) => handleSubmit(e, {username, email, password, confirmPassword})}>

                        <FormInput label={"USERNAME"} value={username} onChange={(e) => setUsername(e.target.value)}
                                   id={username} name={username} prefix={"01"} placeholder={"enter_username"}
                                   variant={"register"} error={errors.username}/>

                        <FormInput label={"EMAIL"} value={email} onChange={(e) => setEmail(e.target.value)} id={"email"}
                                   name={"email"} placeholder={"user@domain.com"} variant={"register"} prefix={"02"}
                                   error={errors.email}/>

                        <FormInput label={"PASSWORD"} value={password} onChange={(e) => setPassword(e.target.value)}
                                   id={"password"} name={"password"} type={"password"} placeholder={"••••••••"}
                                   variant={"register"} prefix={"03"} error={errors.password}/>

                        <FormInput label={"CONFIRM PASSWORD"} value={confirmPassword}
                                   onChange={(e) => setConfirmPassword(e.target.value)} id={"confirm-password"}
                                   name={"confirm-password"} type={"password"} placeholder={"••••••••"}
                                   variant={"register"} prefix={"04"} error={errors.confirmPassword}/>

                        <button type="submit" className={styles.btn}>
                            <span>INITIALIZE ACCOUNT</span>
                            <RiSkipRightLine size={20}/>
                        </button>

                    </form>

                    <div className={styles.footer}>
                        <span className={styles.footerText}>ALREADY HAVE A TAPE?</span>
                        <Link to="/login" className={styles.footerLink}>SIGN IN <RiLoginBoxLine size={14}/> </Link>
                    </div>

                </div>

                <div className={styles.statusBar}>
                    <span className={styles.statusItem}><RiCheckboxCircleLine/> SYS:READY</span>
                    <span className={styles.statusDivider}>◈</span>
                    <span className={styles.statusItem}><RiDatabase2Line/> MEM:OK</span>
                    <span className={styles.statusDivider}>◈</span>
                    <span className={`${styles.statusItem} ${styles.statusBlink}`}><RiRecordCircleLine/> REC</span>
                </div>

            </div>
        </div>
    );
}