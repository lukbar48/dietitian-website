import React from 'react';
import postsData from 'data/postsData';
import styles from './BlogPosts.module.scss';
import Post from './Post';

const BlogPosts = ({ blogsCategory }) => {

  const getLocalStorage = () => {
    const localData = localStorage.getItem('blogItems');
    return localData ? JSON.parse(localData) : postsData;
  }


  let filterData = getLocalStorage()

  if (blogsCategory === 'wszystkie') {
    filterData = getLocalStorage();
  } else if (blogsCategory) {
    filterData = filterData.filter((item) => item.category === blogsCategory);
  }

  return (
    <div className={styles.wrapper}>
      {filterData.map((data) => {
        return <Post key={data.title} {...data} />;
      })}
    </div>
  );
};

export default BlogPosts;
