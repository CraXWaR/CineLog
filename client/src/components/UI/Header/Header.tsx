import {useState} from "react";
import {Link, NavLink} from "react-router";
import {RxCross2, RxHamburgerMenu} from "react-icons/rx";
import styles from "./Header.module.css";
import {useAuth} from "../../../context/auth.context.tsx";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user, logout} = useAuth();

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>

                    {/* Logo */}
                    <Link to="/" className={styles.logo} data-text="CINELOG">
                        CINELOG
                    </Link>

                    {/* Desktop nav */}
                    <nav className={styles.nav}>
                        <NavLink to="/" end
                                 className={({isActive}) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}>
                            Home
                        </NavLink>
                        <NavLink to="/discover"
                                 className={({isActive}) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}>
                            Discover
                        </NavLink>
                        <NavLink to="/trending"
                                 className={({isActive}) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}>
                            Trending
                        </NavLink>
                        {/*TODO ADD AI SEARCH SUGGESTION*/}
                        {/*<NavLink to="/search"*/}
                        {/*         className={({isActive}) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}>*/}
                        {/*    Search*/}
                        {/*</NavLink>*/}
                    </nav>

                    {/* Desktop actions */}
                    <div className={styles.actions}>
                        {!user ? (
                            <>
                                <Link to="/login" className={styles.btnGhost}>SIGN IN</Link>
                                <Link to="/register" className={styles.btnPrimary}>JOIN</Link>
                            </>
                        ) : (
                            <div className={styles.userBox}>
                                <Link to="/profile" className={styles.username}>
                                    {user.username}
                                </Link>
                                <button onClick={logout} className={styles.btnLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Hamburger button — mobile only */}
                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu">
                        {menuOpen ? <RxCross2/> : <RxHamburgerMenu/>}
                    </button>

                </div>

                <div className={styles.borderBottom}/>
            </header>

            {/* Mobile drawer */}
            <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
                <div className={styles.drawerInner}>

                    <div className={styles.drawerHeader}>
                        <span className={styles.drawerLogo}>CINELOG</span>
                        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)}>
                            <RxCross2/>
                        </button>
                    </div>

                    <nav className={styles.drawerNav}>
                        <NavLink to="/" end
                                 className={({isActive}) => `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                                 onClick={() => setMenuOpen(false)}>
                            <span className={styles.drawerPrefix}>01 /</span> Home
                        </NavLink>
                        <NavLink to="/discover"
                                 className={({isActive}) => `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                                 onClick={() => setMenuOpen(false)}>
                            <span className={styles.drawerPrefix}>02 /</span> Discover
                        </NavLink>
                        <NavLink to="/trending"
                                 className={({isActive}) => `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                                 onClick={() => setMenuOpen(false)}>
                            <span className={styles.drawerPrefix}>03 /</span> Trending
                        </NavLink>
                        {/*TODO ADD AI SEARCH SUGGESTION*/}
                        {/*<NavLink to="/search"*/}
                        {/*         className={({isActive}) => `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}*/}
                        {/*         onClick={() => setMenuOpen(false)}>*/}
                        {/*    <span className={styles.drawerPrefix}>04 /</span> Search*/}
                        {/*</NavLink>*/}
                    </nav>

                    <div className={styles.drawerActions}>
                        {!user ? (
                            <>
                                <Link to="/login" className={styles.drawerBtnGhost} onClick={() => setMenuOpen(false)}>
                                    SIGN IN
                                </Link>
                                <Link to="/register" className={styles.drawerBtnPrimary}
                                      onClick={() => setMenuOpen(false)}>
                                    JOIN
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/profile" className={styles.drawerUsername} onClick={() => setMenuOpen(false)}>
                                    {user.username}
                                </Link>
                                <button onClick={() => {
                                    logout();
                                    setMenuOpen(false);
                                }} className={styles.drawerBtnLogout}>
                                    Logout
                                </button>
                            </>
                        )}
                    </div>

                    <div className={styles.drawerStatus}>
                        <span className={styles.drawerDot}/>
                        <span>SYS:READY</span>
                        <span className={styles.drawerDivider}>◈</span>
                        <span className={styles.drawerBlink}>● REC</span>
                    </div>

                </div>
            </div>

            {/* Backdrop overlay */}
            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}/>}
        </>
    );
}