import styles from './Menu.module.css';
import { useState } from 'react';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <button onClick={() => setShowMenu(!showMenu)}></button>
            <nav className={`${styles.menu} ${showMenu ? styles.show : styles.hide}`}>
                <ul className={`${styles.menuList}`}>
                    <li><a href="#intro">Tupay</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;