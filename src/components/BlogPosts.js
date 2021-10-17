import React from 'react';
import postsData from 'data/postsData';
import styles from './BlogPosts.module.scss';
import Post from './Post';

const BlogPosts = ({blogsCategory}) => {
  let filteredData = postsData

  if (blogsCategory === 'wszystkie') {
    filteredData = postsData
  } else if (blogsCategory) {
    filteredData = filteredData.filter(item=>item.category === blogsCategory)
  }

  return (
    <div className={styles.wrapper}>
      {filteredData.map((data, index) => {
        return (
            <Post key={index} {...data} />
        );
      })}
    </div>
  );
};

export default BlogPosts;
