import styles from './Projects.module.css';
import content from '../assets/content-projects.js';
import Github from './GithubIcon';

function ProjectIcon({ link, color }) {
    return (
        <a href={link} target='_blank' rel='noreferrer noopener'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg}>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </g>
            </svg>
        </a>
    )
}

function Card({ img, imgDesc, title, description, stack, github, link }) {
    return (
        <section className={styles.cardContainer}>
            <img src={img} alt={imgDesc} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <ul className={styles.cardStack}>
                {stack.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div className={styles.cardIcons}>
                <Github color='#E0FBFC' link={github} />
                <ProjectIcon color='#E0FBFC' link={link} />
            </div>
        </section>
    );
}

function getLanguage(language) {
    return language === 'pt-br' ? 'pt-br' : 'en-us';
}

function Projects( { language }) {
    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.projectsTitle}>{content.section[getLanguage(language)].title}</h2>
            <p className={styles.projectsParagraph}>{content.section[getLanguage(language)].paragraph}</p>

            <Card
                img={content.cards.etiquetas[getLanguage(language)].img}
                imgDesc={content.cards.etiquetas[getLanguage(language)].imgDesc}
                title={content.cards.etiquetas[getLanguage(language)].title}
                description={content.cards.etiquetas[getLanguage(language)].description}
                stack={content.cards.etiquetas.stack}
                github={content.cards.etiquetas.github}
                link={content.cards.etiquetas.link}
            />
            <Card
                img={content.cards.rastreio[getLanguage(language)].img}
                imgDesc={content.cards.rastreio[getLanguage(language)].imgDesc}
                title={content.cards.rastreio[getLanguage(language)].title}
                description={content.cards.rastreio[getLanguage(language)].description}
                stack={content.cards.rastreio.stack}
                github={content.cards.rastreio.github}
                link={content.cards.rastreio.link}
            />
            <Card
                img={content.cards.blackjack[getLanguage(language)].img}
                imgDesc={content.cards.blackjack[getLanguage(language)].imgDesc}
                title={content.cards.blackjack[getLanguage(language)].title}
                description={content.cards.blackjack[getLanguage(language)].description}
                stack={content.cards.blackjack.stack}
                github={content.cards.blackjack.github}
                link={content.cards.blackjack.link}
            />
        </div>
    );
}

export default Projects;