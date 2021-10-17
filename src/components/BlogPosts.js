import React from 'react';
import postsData from 'data/postsData';
import styles from './BlogPosts.module.scss';
import Post from './Post';

const BlogPosts = () => {
  return (
    <div className={styles.wrapper}>
      {postsData.map((data, index) => {
        return (
            <Post key={index} {...data} />
        );
      })}
    </div>
  );
};

export default BlogPosts;
