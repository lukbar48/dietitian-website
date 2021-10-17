import React from 'react';
import styles from './Post.module.scss';

const Post = ({ title, image, date, text }) => {
  return (
    <div className={styles.post}>
      <a className={styles.imageContainer} href="/blog/post">
        <img className={styles.image} src={image} alt="" />
      </a>

      <div className={styles.description}>
        <div className={styles.header}>
          <h6>{date}</h6>
        </div>
        <h4 className={styles.title}>
          <a href="/blog/post">{title}</a>
        </h4>
        <p className={styles.shortText}>{`${text.substring(0, 350)}...`}</p>
      </div>
    </div>
  );
};

export default Post;
