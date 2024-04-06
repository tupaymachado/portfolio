import styles from './Footer.module.css';

let content = {
    'pt-br': {
        title: 'Contato',
        email: 'tupay.machado@gmail.com'
    }
};

function getLanguage(language) {
    return language === 'pt-br' ? 'pt-br' : 'en-us';
}

function Footer({ language }) {
    return (
        <footer className={styles.footerContainer}>
            <h2 className={styles.footerTitle}>{content[getLanguage(language)].title}</h2>
            <p className={styles.footerContent}>{content[getLanguage(language)].email}</p>
        </footer>
    );
}