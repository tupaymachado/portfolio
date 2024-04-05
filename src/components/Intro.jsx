import styles from './Intro.module.css';
import linkedinDark from '../assets/linkedin-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';

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
        <div className={styles.introContainer}>
            <p className={styles.intro}>
                {language === 'pt-br' ? content['pt-br'].intro : content['en-us'].intro}
            </p>
            <div className={styles.introImgContainer}>
                <img src={linkedinLight} alt="LinkedIn" className={styles.introImg} />
            </div>
        </div>
    )
};

export default Intro;
