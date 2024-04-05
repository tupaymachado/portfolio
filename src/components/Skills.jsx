import styles from './Skills.module.css';

let content = {
    frontend: ['HTML5', 'CCS3', 'Vanilla JavaScript', 'React'],
    backend: ['Firebase Realtime Database', 'Firebase Firestore'],
    /* databases: 'Bancos de Dados', */
    tools: ['GitHub', 'VSCode'],
    /* languages: 'Linguagens de Programação', */
    'pt-br': {
        title: 'Habilidades',
        skills: {
            others: ['Inglês Avançado', 'Graduação em Administração Completa', 'Graduação em Análise e Desenvolvimento de Sistemas em Andamento']
        }
    },
    'en-us': {
        title: 'Skills',
        skills: {
            others: ['Advanced English', 'Bachelor\'s Degree in Business Administration', 'Bachelor\'s Degree in Systems Analysis and Development in Progress']
        }
    }
}

function getLanguage(language) {
    return language === 'pt-br' ? 'pt-br' : 'en-us';
}

function Skills({ language }) {
    return (
        <div className={styles.skillsContainer}>
            <h2 className={styles.skillsTitle}>{content[getLanguage(language)].title}</h2>
            <div className={styles.skillsContent}>
                <ul>
                    {content.frontend.concat(content.backend, content.tools, content[getLanguage(language)].skills.others).map((skill, index) => (
                        <li key={index}><p>{skill}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;