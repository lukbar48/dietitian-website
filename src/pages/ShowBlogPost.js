import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postsData from 'data/postsData';
import styles from './ShowBlogPost.module.scss';

const ShowBlogPost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    window.scroll(0, 0);

      const localData = localStorage.getItem('blogItems');
      setPosts(localData ? JSON.parse(localData) : postsData)

  }, []);

  let getPost = posts.filter((item) => item.id === id * 1);
  getPost = Object.assign({}, ...getPost);
  const { title, image, category, date, text } = getPost;

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.imageWrapper}>
          <div className={styles.category}>{category}</div>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.descriptionWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.date}>{date}</div>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogPost;
