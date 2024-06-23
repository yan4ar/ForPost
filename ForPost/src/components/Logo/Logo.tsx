import styles from './Logo.module.scss'


export function Logo(){
    return (
        <>
         <a href='#' className={styles.logo__block}>
            <p className={styles.logo__text}>ForPost</p>
            <img className={styles.logo__icon} src="logo.svg" alt="" />
         </a>
        
        
        
        </>
    )
}