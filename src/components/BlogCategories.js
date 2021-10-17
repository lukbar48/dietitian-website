import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import styles from './BlogCategories.module.scss';

const BlogCategories = ({ setOpenForm }) => {
  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        <NavLink exact to="/blog" className={styles.link} activeClassName={styles.active}>
          Wszystkie
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.active} to="/blog/zdrowie">
          Zdrowie
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.active} to="/blog/suplementacja">
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
      <div className={styles.sideNav}>
        <div className={styles.search}>
          <input type="text" placeholder="Wpisz szukaną frazę" />
          <button type="submit">
            <AiOutlineSearch />{' '}
          </button>
        </div>
        <button onClick={() => setOpenForm(true)} className={styles.addBlog} type="button">
          <BsPlusLg />
          <span>Dodaj nowy post</span>
        </button>
      </div>
    </div>
  );
};

export default BlogCategories;