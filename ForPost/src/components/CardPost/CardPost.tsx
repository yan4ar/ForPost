import styles from './CardPost.module.scss'
import { CustomBtnTwo } from '../ButtonTwo/ButtonTwo'

interface Icard  {
    first_name: string,
    last_name: string,
    title: string,
    body: string,
    avatar: string,
    id: number,
    buttonAdmin:string,
    onDelete?: () => void;
} 

export function CardPost({id,avatar,first_name,last_name,title,body,buttonAdmin,onDelete}:Icard) {

    return (
        <>
                <div className={styles.card__block} key={id}>
                    <div className={styles.card__user}>

                        {avatar ? <img className={styles.card__icon} src={avatar} alt="" />
                            : <img className={styles.card__icon} src='user.svg' alt="" />}
                        <p className={styles.card__username}>{first_name}</p>
                        <p className={styles.card__lastname}>{last_name}</p>
                    </div>
                    <p className={styles.card__title}>
                        {title}
                    </p>
                    <p className={styles.card__text}>
                        {body}
                    </p>
                    <div className={styles.card__flex}>
                        <CustomBtnTwo $width='170px' $height='50px' $color='#D48166' $colorText='#000' >Посмотреть пост</CustomBtnTwo>
                    </div>    
                    {'yes' == buttonAdmin ? <button className={styles.btn__admin} onClick={onDelete} >Удалить</button> : <div></div>  }                 
                </div>
               
        </>
    )
}