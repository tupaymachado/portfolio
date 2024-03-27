import "@fontsource/dm-mono";
import "@fontsource/dm-mono/500.css";
import styles from './Title.module.css';

function Title() {
    return (
        <>
            <h1 className={styles.title}>Hello, World!<br/> I'm <span className={styles.name}>Tupay</span>.</h1>
            <h2 className={styles.title}>I'm a Software Developer.</h2>
        </>
    );
}

export default Title;