import styles from './GithubIcon.module.css';
//trocar fill='#E0FBFC' por fill={color}
function Github({ color, link }) {
    return (
        <a href={link} target='_blank' rel='noreferrer noopener'>
            <svg fill='#E0FBFC' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title>github</title>
                    <path d="M16 1.333c-8.837 0-16 7.163-16 16 0 7.07 4.583 13.07 10.945 15.183 0.8 0.147 1.093-0.347 1.093-0.77 0-0.38-0.014-1.64-0.022-2.97-4.45 0.968-5.39-2.15-5.39-2.15-0.728-1.848-1.779-2.34-1.779-2.34-1.457-0.997 0.11-0.978 0.11-0.978 1.607 0.113 2.45 1.65 2.45 1.65 1.427 2.448 3.743 1.74 4.65 1.33 0.145-1.032 0.559-1.74 1.015-2.14-3.56-0.405-7.29-1.78-7.29-7.91 0-1.75 0.63-3.18 1.65-4.3-0.16-0.405-0.72-2.04 0.16-4.24 0 0 1.35-0.43 4.42 1.64 1.28-0.36 2.64-0.54 4-0.55 1.36 0.01 2.72 0.19 4 0.55 3.07-2.07 4.42-1.64 4.42-1.64 0.88 2.2 0.32 3.84 0.16 4.24 1.02 1.12 1.65 2.55 1.65 4.3 0 6.15-3.74 7.5-7.29 7.9 0.57 0.49 1.08 1.46 1.08 2.95 0 2.13-0.02 3.85-0.02 4.38 0 0.43 0.29 0.93 1.1 0.77 6.36-2.11 10.93-8.11 10.93-15.18 0-8.837-7.163-16-16-16z"></path>
                </g>
            </svg>
        </a>
    );
}

export default Github;