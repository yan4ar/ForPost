import styles from './scss/MainPage.module.scss'
import { CustomBtn } from './components/Button/Button'
import { CardPost } from './components/CardPost/CardPost'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom'

enum StorageCase {
  postAmount = 'postAmount'
}


export interface Post {
  first_name: string,
  last_name: string,
  title: string,
  body: string,
  avatar: string,
  id: number
}


setTimeout(clearLocalStorage, 60000); 

function clearLocalStorage() {

  localStorage.clear();
}



export function MainPage() {

  const LoadMore = () => {
    const amount = localStorage.getItem(StorageCase.postAmount)
    if (!amount) return
    fetchPosts(+amount);
  }

  const SaveAmount = (value: number) => {
    localStorage.setItem(StorageCase.postAmount, value.toString())
    fetchPosts(value);
    setOffset(0)
  }
  const [listEnd, setlistEnd] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [posts, setPosts] = useState<Post[]>([]);

   const fetchPosts = async (limit: number) => {
    try {
      const response = await axios.get('http://localhost:3000/posts', {
        params: {
          _limit: limit,
          _start: offset
        }
      });
      setOffset((prev) => prev + limit)
      if (response.data.length === 0) {
        setlistEnd(true)
        return
      }
      setPosts((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error('error', error);
    }
  };


  useEffect(() => {
    const amount = localStorage.getItem(StorageCase.postAmount)
    if (!amount) {

      SaveAmount(6);
    } else {
      fetchPosts(+amount);
    }
  }, []);



  return (
    <>
      <div className={styles.container}>
        <main>
          <div className={styles.title}>
            <p className={styles.title__mainText}>Пришло время поделиться чем - то</p>
            <div className={styles.title__block}>
              <img className={styles.title__img} src="title.png" alt="" />
              <div className={styles.title__imgBlock}>
                <p className={styles.title__text}>Самое время поделиться с коллегами
                  полезной информацией
                  и своими навыками.</p>
                <NavLink to="/post"><CustomBtn $width='170px' $height='60px' $color='#373A36' $colorText='#D48166' $margin='50px' >Написать пост</CustomBtn></NavLink>
              </div>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.post__title}>Посты</p>
            <div className={styles.post__btn}>
              <button className={styles.post__btnD} onClick={() => SaveAmount(3)} >3</button>
              <button className={styles.post__btnD} onClick={() => SaveAmount(6)} >6</button>
              <button className={styles.post__btnD} onClick={() => SaveAmount(9)} >9</button>
            </div>
          </div>
          <div className={styles.post__flex__card}>
            {posts.map(posts => (

              <CardPost
                id={posts.id}
                avatar={posts.avatar}
                first_name={posts.first_name}
                last_name={posts.last_name}
                title={posts.title}
                body={posts.body}
                buttonAdmin='' 
                />
            ))}
          </div>
          <center>
            {!listEnd ?
              <button className={styles.next__btn} onClick={LoadMore}>Смотреть дальше</button>
              : null}
          </center>
        </main>
      </div>
    </>
  )
}

