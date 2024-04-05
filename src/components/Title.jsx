import "@fontsource/dm-mono";
import "@fontsource/dm-mono/500.css";
import styles from './Title.module.css';

let content = {
    'pt-br': {
        title: 'Olá, Mundo! Eu sou o ',
        name: 'Tupay 🙋‍♂️',
        subtitle: 'Sou desenvolvedor de software.'
    },
    'en-us': {
        title: 'Hello, World! I\'m ',
        name: 'Tupay 🙋‍♂️',
        subtitle: 'I\'m a Software Developer.'
    }
}

function getLanguage(language) {
    console.log(language)
    return language === 'pt-br' ? 'pt-br' : 'en-us';
}

function Title({ language }) {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{content[getLanguage(language)].title}<br/>
                <span className={styles.name}>{content[getLanguage(language)].name}</span>.
            </h1>
            <h2 className={styles.title}>{content[getLanguage(language)].subtitle}</h2>
        </div>
    );
}

export default Title;