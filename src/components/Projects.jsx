import styles from './Projects.module.css';
import etiquetas from '../assets/etiquetas.jpg';

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
            <div className={styles.cardLinks}>
                <a href={github} className={styles.cardLink}>Github Icon</a>
                <a href={link} className={styles.cardLink}>Link to Project</a>
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