import { NavLink } from 'react-router-dom'
import styles from '../scss/Login.module.scss'
export function Login() {

    return (
        <>
         <div className={styles.container}>
            
            <form>
        <div className={styles.log__block}>
            <p className={styles.log__title}>Вход</p>
                <input className={styles.log__titleInp} type="text" name='log' id='log' placeholder='Логин' />
                <input className={styles.log__titleInp} type="password" name='password' id='password' placeholder='Пароль' />
                
            <div className={styles.log__flex}>
            <NavLink to={"/registration"}><button className={styles.log__reg} type='button'>Регистрация</button></NavLink>
            <NavLink to={"/"}><button className={styles.log__reg} type='button'>Войти</button></NavLink>
            </div>
            </div>
        </form>
        </div>
        
        </>
    )}