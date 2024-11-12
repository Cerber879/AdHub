import styles from './footer.module.css'

export function Footer(){

    return(
        <footer className={styles.footer}>
            <img className={styles.logo} src="/favicons.png" alt="Icon" />
            <p>AdHub - cайт объявлений России.</p>
        </footer>
    )
}
