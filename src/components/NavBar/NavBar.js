import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                DIV1
                    <ul className={styles.navbar_links}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/favorite'>Favorite</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>
            </div>
        </nav>
    );
};

export default NavBar;