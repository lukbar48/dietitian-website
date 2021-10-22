import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Post.module.scss';

const Post = ({ title, image, date, text, id }) => {
  return (
    <div className={styles.post}>
      <Link className={styles.imageContainer} to={`/blog/${id}`}>
        <img className={styles.image} src={image} alt="" />
      </Link>

      <div className={styles.description}>
        <div className={styles.header}>
          <h6>{date}</h6>
        </div>
        <h4 className={styles.title}>
          <Link to={`/blog/${id}`}>{title}</Link>
        </h4>
        <p className={styles.shortText}>{`${text.substring(0, 350)}...`}</p>
      </div>
    </div>
  );
};

export default Post;
