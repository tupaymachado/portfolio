import etiquetas from '../assets/etiquetas.jpg';
import rastreio from '../assets/rastreio.jpg';
import blackjack from '../assets/blackjack.jpg';

let content = {
    cards: {
        etiquetas: {
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
            stack: ['React', 'Firebase Firestore', 'CSS3', 'Firebase Auth'],
            github: 'https://github.com/tupaymachado/portfolioElev',
            link: 'https://portfolioelevato.web.app/'
        },
        rastreio: {
            'pt-br': {
                img: rastreio,
                imgDesc: 'Rastreio de malotes',
                title: 'Rastreio de Malotes',
                description: 'Aplicação web para rastreamento de malotes. Permite o cadastramento de envios e acompanhamento do status de entrega entre diferentes filiais de uma empresa.',
            },
            'en-us': {
                img: rastreio,
                imgDesc: 'Package tracking',
                title: 'Package Tracking',
                description: 'Web application for package tracking. Allows the registration of shipments and monitoring of delivery status between different branches of a company.',
            },
            stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Bootstrap 5', 'Firebase Auth', 'Firebase Realtime DB',],
            github: 'https://github.com/tupaymachado/rastreio',
            link: 'https://rastreio-afdb3.web.app/'
        },
        blackjack: {
            'pt-br': {
                img: blackjack,
                imgDesc: 'Jogo de cartas',
                title: 'Blackjack',
                description: 'Jogo de cartas Blackjack. Trabalho final da disciplina de Lógica de Programação. Feito apenas com vetores, sem objetos.',
            },
            'en-us': {
                img: blackjack,
                imgDesc: 'Card game',
                title: 'Blackjack',
                description: 'Card game Blackjack. Final project of the Programming Logic discipline. Made only with arrays, without objects.',
            },
            stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
            github: 'https://github.com/tupaymachado/Vanilla-JS-Blackjack',
            link: 'https://tupaymachado.github.io/Vanilla-JS-Blackjack/'
        }
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

export default content;