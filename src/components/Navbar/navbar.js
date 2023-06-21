import styles from './navbar.module.css'
import { Outlet, Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__bar}>
                <Link to="/profile" className={styles.navigation__bar_item}><li >My profile</li></Link>
                <Link to="/dialogs" className={styles.navigation__bar_item}><li>Messages</li></Link>
                <li className={styles.navigation__bar_item}>Music</li>
                <li className={styles.navigation__bar_item}>News</li>
                <li className={styles.navigation__bar_item}>Settings</li>
            </ul>
        </nav>
    )
};

export default Navbar;