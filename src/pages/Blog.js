import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import BlogPosts from 'components/BlogPosts';
import TitleHeader from 'components/TitleHeader';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <>
      <TitleHeader>Blog</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.blog}>
          <div className={styles.categories}>
            <ul className={styles.list}>
              <NavLink exact to="/blog" className={styles.link} activeClassName={styles.active}>
                Wszystkie
              </NavLink>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/blog/odchudzanie"
              >
                Odchudzanie
              </NavLink>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/blog/suplementacja"
              >
                Suplementacja
              </NavLink>
              <NavLink className={styles.link} activeClassName={styles.active} to="/blog/sport">
                Sport
              </NavLink>
              <NavLink className={styles.link} activeClassName={styles.active} to="/blog/przepisy">
                Przepisy
              </NavLink>
              <NavLink className={styles.link} activeClassName={styles.active} to="/blog/inne">
                Inne
              </NavLink>
            </ul>
            <div className={styles.search}>
              <input type="text" placeholder="Wpisz szukaną frazę" />
              <button type="submit">
                <AiOutlineSearch />{' '}
              </button>
            </div>
          </div>
          <BlogPosts/>
        </div>
      </div>
    </>
  );
};

export default Blog;
