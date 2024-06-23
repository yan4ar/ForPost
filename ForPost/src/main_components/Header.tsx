import styles from '../main_components/Header.module.scss'
import { Logo } from '../components/Logo/Logo'
import { CustomBtn } from '../components/Button/Button'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Header() {

    const [burger,setBurger] = useState<boolean>(false);

    return (
        <>
            <div className={styles.header__block}>
                <div className={styles.container}>
                    <div className={styles.header__flex}>
                        <NavLink to="/"><Logo /></NavLink>
                        <ul className={styles.ul__header}>
                            <li className={styles.header__text}><NavLink className={styles.header__text} to={"/"}>Главная</NavLink></li>
                            <li className={styles.header__text}><a className={styles.header__text} href="#">Мои посты</a></li>
                        </ul>

                        <ul className={styles.ul__header}>
                            <div className={styles.ul__flex}>
                            <NavLink to={"/admin"}><CustomBtn 
                            $width='170px' $height='50px' 
                            $color='#D48166' $colorText='#373A36' 
                            $margin='0px'
                            >Админ панель</CustomBtn></NavLink>
                            <NavLink to={"/post"}><CustomBtn 
                            $width='170px' $height='50px' 
                            $color='#D48166' 
                            $colorText='#373A36' 
                            $margin='0px'
                            >Написать пост</CustomBtn></NavLink>
                            </div>
                            <li className={styles.header__text}><NavLink className={styles.header__text} to="/auth">Войти</NavLink></li>
                            
                        </ul>
                        <button onClick={() => {
                            burger ? setBurger(false) : setBurger(true)
                        }}><img className={styles.abs__icon} src="burger.svg" alt="" /></button>
                        <div className={burger ? styles.active : styles.ul__abs} >
                        <ul className={styles.ul__headerTwo}>
                            <div className={styles.ul__flex}>
                            <NavLink to={"/admin"}><CustomBtn 
                            $width='170px' $height='50px' 
                            $color='#D48166' $colorText='#373A36' 
                            $margin='0px'
                            >Админ панель</CustomBtn></NavLink>
                            <NavLink to={"/post"}><CustomBtn 
                            $width='170px' $height='50px' 
                            $color='#D48166' 
                            $colorText='#373A36' 
                            $margin='0px'
                            >Написать пост</CustomBtn></NavLink>
                            
                            <li className={styles.header__text}><NavLink className={styles.header__text} to="/auth">Войти</NavLink></li>
                            </div>
                        </ul>
                        </div>
                        
                    </div>
                </div>
            </div>



        </>
    )
}