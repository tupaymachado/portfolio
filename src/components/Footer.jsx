import styles from './Footer.module.css';

let content = {
    'pt-br': {
        title: 'Entre em contato',
        button: 'Me envie um email',
    },
    'en-us': {
        title: 'Get in touch',
        button: 'Email me',
    },
    email: 'tupay.machado@gmail.com'

};

function getLanguage(language) {
    return language === 'pt-br' ? 'pt-br' : 'en-us';
}

function Footer({ language }) {
    return (
        <footer className={styles.footerContainer} id='contact'>
            <h2>{content[getLanguage(language)].title}</h2>
            <button>{content[getLanguage(language)].button}</button>
        </footer>
    );
}

export default Footer;