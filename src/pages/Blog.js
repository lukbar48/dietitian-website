import React, {useState} from 'react';
import BlogPosts from 'components/BlogPosts';
import TitleHeader from 'components/TitleHeader';
import BlogCategories from 'components/BlogCategories';
import AddBlogForm from 'components/AddBlogForm';
import styles from './Blog.module.scss';

const Blog = () => {
  const [openForm, setOpenForm] = useState(false)
  const [blogsCategory, setBlogsCategory] = useState('')

  return (
    <>
      <TitleHeader>Blog</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.blog}>
          <BlogCategories setBlogsCategory={setBlogsCategory} setOpenForm={setOpenForm} />
          <BlogPosts blogsCategory={blogsCategory} />
          {openForm ? <AddBlogForm setOpenForm={setOpenForm} /> : null}
        </div>
      </div>
    </>
  );
};

export default Blog;
