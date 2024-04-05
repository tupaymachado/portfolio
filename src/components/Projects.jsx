import styles from './Projects.module.css';
import etiquetas from '../assets/etiquetas.jpg';
import Github from './GithubIcon';

let content = {
    cards: {
        'pt-br': {
            img: etiquetas,
            imgDesc: 'Gerenciador de showroom',
            title: 'Gerenciador de Showroom',
            description: 'Aplicação web para gerenciamento de showroom. Permite busca, cadastro e impressão de etiquetas de produtos de um showroom.',
        },
        'en-us': {
            img: etiquetas,
            imgDesc: 'Showroom manager',
            title: 'Showroom Manager',
            description: 'Web application for showroom management. Allows search, register and print product labels from a showroom.',
        },
        stack: ['React', 'Firebase', 'Material-UI'],
        github: 'https://github.com/tupaymachado/portfolioElev',
        link: 'https://portfolioelevato.web.app/'
    },
    section: {
        'pt-br': {
            title: 'Projetos',
            paragraph: 'Aqui estão alguns dos projetos em que tenho trabalhado:'
        },
        'en-us': {
            title: 'Projects',
            paragraph: 'Here are some of the projects I\'ve been working on:'
        }
    }
}

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
        <div className={styles.cardContainer}>
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
        </div>
    );
}

function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.projectsTitle}>Projects</h2>
            <p className={styles.projectsParagraph}>Here are some of the projects I've been working on:</p>

            <Card
                img={content.cards['pt-br'].img}
                imgDesc={content.cards['pt-br'].imgDesc}
                title={content.cards['pt-br'].title}
                description={content.cards['pt-br'].description}
                stack={content.cards.stack}
                github={content.cards.github}
                link={content.cards.link}
            />
        </div>
    );
}

export default Projects;