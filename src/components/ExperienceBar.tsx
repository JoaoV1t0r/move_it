import styles from '../styles/components/ExpirienceBar.module.css';

export function ExpirienceBar() {
    return (
        <header className={styles.expirienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className={styles.currentExpirience} style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}