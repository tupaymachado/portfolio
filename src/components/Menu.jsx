import styles from './Menu.module.css';

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><a href="#intro">Intro</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </nav>
    );
}

export default Menu;