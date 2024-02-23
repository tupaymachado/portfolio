import styles from './Menu.module.css';
import { useState } from 'react';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className={styles.navBar}>
            <label className={`${styles.buttonsBurger} ${showMenu ? styles.menuActive : ''}`} htmlFor="burger" onClick={() => setShowMenu(!showMenu)}>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
            </label>
            <div className={`${styles.menu} ${showMenu ? styles.show : " "}`}>
                <ul className={`${styles.menuList}`}>
                    <li><a href="#intro">Tupay</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
