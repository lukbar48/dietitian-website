import React from 'react';
import styles from './Post.module.scss';

const Post = ({ title, image, author, category, date, text }) => {
  return (
    <div className={styles.post}>
      <a className={styles.image} href="/blog/post">
        <img src={image} alt="" />
      </a>

      <div className={styles.description}>
        <div className={styles.header}>
          <h6>{date}</h6>
          <h6>{author}</h6>
        </div>
        <h4 className={styles.title}>
          <a href="/blog/post">{title}</a>
        </h4>
        <p className={styles.shortText}>{text}</p>
      </div>
    </div>
  );
};

export default Post;
