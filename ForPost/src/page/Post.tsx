import styles from '../scss/Post.module.scss'


export function Post() {

    return (
        <>
        <div className={styles.container}>
            <form>
        <div className={styles.post__block}>
            <div className={styles.post__title}>
                <label className={styles.post__titleTxt} htmlFor="title">Заголовок поста</label>
                <input className={styles.post__titleInp} type="text" name='title' id='title' placeholder='Напишите заголовок' />
            </div>
            <div className={styles.post__title}>
                <label className={styles.post__titleTxt} htmlFor="postTxt">Текст</label>
                <textarea className={styles.post__textAr} name="postTxt" id="postTxt" placeholder='Напишите текст'/>
            </div>
            <center>
            <button className={styles.post__btn} type='button'>Выложить пост</button>
        </center>
        </div>
        </form>
        </div>
        </>
    )}