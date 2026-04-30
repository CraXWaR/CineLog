import {useState} from "react";
import {Link, useLocation} from "react-router";
import FormInput from "../../../components/FormInput/FormInput.tsx";
import {
    RiSkipRightLine,
    RiCheckboxCircleLine,
    RiDatabase2Line,
    RiRecordCircleLine, RiUserAddLine
} from "react-icons/ri";

import {useLogin} from "../../../hooks/useAuth.ts";

import styles from "./Login.module.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {handleSubmit, errors} = useLogin();

    const location = useLocation();
    const message = location.state?.message;

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

                    {message && <p className={styles.successMessage}>{message}</p>}
                    {errors.general && <p className={styles.errorMessage}>{errors.general}</p>}
                    
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e, {email, password})}>
                        <FormInput label={'EMAIL'} prefix={'01'} value={email}
                                   onChange={(e) => setEmail(e.target.value)} id={"email"} name={"email"}
                                   placeholder={"user@domain.com"} type={"email"} variant={"login"}
                                   error={errors.email}/>

                        <FormInput label={"PASSWORD"} prefix={"02"} value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   id={"password"} name={"password"} placeholder={"••••••••"} type={"password"}
                                   variant={"login"} error={errors.password}/>

                        <button type="submit" className={styles.btn}>
                            <span>ACCESS VAULT</span>
                            <span className={styles.btnArrow}><RiSkipRightLine size={20}/></span>
                        </button>
                    </form>

                    <div className={styles.footer}>
                        <span className={styles.footerText}>NO TAPE YET?</span>
                        <Link to="/register" className={styles.footerLink}>REGISTER <RiUserAddLine size={14}/> </Link>
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