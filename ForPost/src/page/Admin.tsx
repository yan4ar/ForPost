import styles from "../scss/Admin.module.scss"
import { CardPost } from '../components/CardPost/CardPost'
import { useEffect } from 'react';
import { fetchPosts } from '../store/postAction';
 import { deletePost } from '../store/postAction';
 import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
export function Admin() {

  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  
  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
  };


  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);
    return (

        <>
        <div className={styles.container}>
        <center><p className={styles.admin__title}>Админ панель</p></center>
        <p className={styles.admin__pretitile}>Посты</p>
       
            <div className={styles.admin__card}>       
            {posts.map((post) => (
              <CardPost 
                id={post.id}
                avatar={post.avatar}
                first_name={post.first_name}
                last_name={post.last_name}
                title={post.title}
                body={post.body}
                buttonAdmin='yes'
                onDelete={() => handleDeletePost(post.id)}
                />
            
            ))} 
            </div>
    
        </div>
        </>
    )}