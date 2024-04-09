import styles from './Menu.module.css';
import { useState } from 'react';

function Menu({ language, switchLanguage }) {
    const [showMenu, setShowMenu] = useState(false);

    let content = {
        'pt-br': {
            projects: "Projetos",
            skills: "Habilidades",
            contacts: "Contato",
        },
        'en-us': {
            projects: "Projects",
            skills: "Skills",
            contacts: "Contact",
        }
    };

    function getLanguage(language) {
        return language === 'pt-br' ? 'pt-br' : 'en-us';
    }

    return (
        <nav className={styles.navBar}>
            <div className={styles.navBarContainer}>
                <label className={`${styles.buttonsBurger} ${showMenu ? styles.menuActive : ''}`} htmlFor="burger" onClick={() => setShowMenu(!showMenu)}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </label>
                <div className={`${styles.menu} ${showMenu ? styles.show : " "}`}>
                    <ul className={`${styles.menuList}`}>
                        <li><a href="#">Tupay</a></li>
                        <li><a href="#projects">{content[getLanguage(language)].projects}</a></li>
                        <li><a href="#skills">{content[getLanguage(language)].skills}</a></li>
                        <li><a href="#contact">{content[getLanguage(language)].contacts}</a></li>
                    </ul>
                </div>
                <button className={styles.languageButton} onClick={() => switchLanguage()}>{language}</button>
            </div>
        </nav>
    );
}

export default Menu;
