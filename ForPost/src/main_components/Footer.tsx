import styles from '../main_components/Footer.module.scss'
import {Logo} from '../components/Logo/Logo'
import {CustomBtn} from '../components/Button/Button'
import { NavLink } from 'react-router-dom'
export function Footer(){
    return (
        <>
         <div className={styles.footer__block}>
            <div className={styles.container}>
            <div className={styles.footer__flex}>
            <NavLink to="/"><Logo/></NavLink>
            <ul className={styles.ul__footer}>
            
                <li className={styles.footer__text}><NavLink className={styles.footer__text} to="/">Главная</NavLink></li>
                <li className={styles.footer__text}><a className={styles.footer__text} href="#">Мои посты</a></li>
            </ul>
            </div>
            <div className={styles.footer__flex}>
            <ul className={styles.ul__footer}>
            <NavLink to={"/post"}><CustomBtn $width='170px'$height='50px'$color='#D48166'$colorText='#373A36' $margin ='0px'>Написать пост</CustomBtn></NavLink>
            </ul>
            </div>
            </div>
         </div>
        
        
        
        </>
    )}