import styles from './Intro.module.css';
import Github from './GithubIcon';

function Linkedin({ color }) {
    return (
        <a href='https://www.linkedin.com/in/tupaymachado/' target='_blank' rel='noreferrer noopener'>
            <svg fill='#E0FBFC' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title>linkedin</title>
                    <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                </g>
            </svg>
        </a>
    );
}

function Intro({ language, color }) {
    let content = {
        'pt-br': ["Sou um entusiasta da tecnologia e uma das minhas paixões é conseguir resolver problemas práticos através de soluções simples, criativas e eficientes.",
        "Atualmente curso Análise e Desenvolvimento de Sistemas no Senac/RS, em Pelotas. Lá tive oportunidade de participar de iniciativas fantásticas, como os Hackathons, onde minha equipe conseguiu conquistar o terceiro lugar apesar de ainda sermos todos do primeiro semestre.",
        "Além dos estudos, tenho me dedicado a projetos práticos em meu atual local de trabalho. Apesar de ainda não trabalhar na área, pude desenvolver alguns projetos que foram implementados em larga escala na empresa e que obtiveram resultados muito positivos."
            
    ],
        'en-us': ["I'm a technology enthusiast and one of my passions is to solve practical problems through simple, creative and efficient solutions.",
        "I'm currently studying Systems Analysis and Development at Senac/RS, in Pelotas. There I had the opportunity to participate in fantastic initiatives, such as Hackathons, where my team managed to win third place despite still being in the first semester.",
        "In addition to my studies, I have dedicated myself to practical projects in my current workplace. Although I don't work in the area yet, I was able to develop some projects that were implemented on a large scale in the company and that obtained very positive results."]
    };

    return (
        <div className={styles.introContainer}>
            <p className={styles.intro}>
                {content[language].map((paragraph, index) => <span key={index}>{paragraph}<br /><br /></span>)}
            </p>
            <div className={styles.introImgContainer}>
                <Linkedin
                    color={color}
                />
                <Github
                    color={color}
                    link='https://github.com/tupaymachado'
                />
            </div>
        </div>
    )
};

export default Intro;
