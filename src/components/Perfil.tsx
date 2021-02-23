import styles from '../styles/components/Perfil.module.css';

export function Perfil() {
    return (
        <div className={styles.perfilContainer}>
            <img src="https://github.com/JoaoV1t0r.png" alt="João Vitor" />
            <div>
                <strong>Joao Vitor</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}