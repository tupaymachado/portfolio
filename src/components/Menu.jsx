import styles from './Menu.module.css';
import { useState } from 'react';

function Menu({ language, switchLanguage }) {
    const [showMenu, setShowMenu] = useState(false);

    let content = {
        'pt-br': {
            projects: "Projetos",
            contact: "Contato",
        },
        'en-us': {
            projects: "Projects",
            contact: "Contact",
        }
    };

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
                    <li><a href="#projects">{language === 'pt-br' ? content['pt-br'].projects : content['en-us'].projects}</a></li>
                    <li><a href="#contact">{language === 'pt-br' ? content['pt-br'].contact : content['en-us'].contact}</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
            <button className={styles.languageButton} onClick={() => switchLanguage()}>{language}</button>
        </nav>
    );
}

export default Menu;
