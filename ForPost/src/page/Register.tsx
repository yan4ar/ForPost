import { NavLink } from "react-router-dom"
import styles from "../scss/Register.module.scss"





export function Register() {

    return (
        <>
            <div className={styles.container}>

                <form>
                    <div className={styles.log__block}>
                        <p className={styles.log__title}>Регистрация</p>
                        <input className={styles.log__titleInp} type="text" name='log' id='log' placeholder='Логин' />
                        <input className={styles.log__titleInp} type="password" name='password' id='password' placeholder='Пароль' />
                        <input className={styles.log__titleInp} type="password" name='password' id='password' placeholder='Повторите пароль' />
                        <center>
                        <NavLink to={"/"}><button className={styles.log__reg} type='button'>Регистрация</button></NavLink>
                        </center>
                    </div>
                </form>
            </div>
        </>

    )
}