import styles from './Intro.module.css';

function Intro({ language }) {

    let content = {
        'pt-br': {
            intro: "Olá, eu sou o Tupay! Desenvolvedor de Software e entusiasta de tecnologia. Seja bem-vindo ao meu site!",
        },
        'en-us': {
            intro: "Hello, I'm Tupay! Software Developer and technology enthusiast. Welcome to my website!",
        }
    };

    return (
        <>
            <p className={styles.intro}>
                {language === 'pt-br' ? content['pt-br'].intro : content['en-us'].intro}
            </p>

        </>
    )
};

export default Intro;
