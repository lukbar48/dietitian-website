import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { useGlobalContext } from 'contexts/context';
import styles from './BlogCategories.module.scss';

const BlogCategories = ({ setOpenForm, setBlogsCategory, setSearchTerm }) => {
  const searchValue = useRef();
  const {login} = useGlobalContext()

  const searchPost = () => {
    setSearchTerm(searchValue.current.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        <Link
          // exact
          onClick={() => setBlogsCategory('wszystkie')}
          to="/blog"
          className={styles.link}
        >
          Wszystkie
        </Link>
        <Link onClick={() => setBlogsCategory('zdrowie')} className={styles.link} to="/blog">
          Zdrowie
        </Link>
        <Link onClick={() => setBlogsCategory('suplementacja')} className={styles.link} to="/blog">
          Suplementacja
        </Link>
        <Link onClick={() => setBlogsCategory('sport')} className={styles.link} to="/blog">
          Sport
        </Link>
        <Link onClick={() => setBlogsCategory('przepisy')} className={styles.link} to="/blog">
          Przepisy
        </Link>
        <Link onClick={() => setBlogsCategory('inne')} className={styles.link} to="/blog">
          Inne
        </Link>
      </ul>
      <div className={styles.sideNav}>
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            ref={searchValue}
            onChange={searchPost}
            type="text"
            placeholder="Wpisz szukaną frazę"
          />
          <button type="submit">
            <AiOutlineSearch />{' '}
          </button>
        </form>
        {login ? (
          <button onClick={() => setOpenForm(true)} className={styles.addBlog} type="button">
            <BsPlusLg />
            <span>Dodaj nowy post</span>
          </button>
        ) : (
          <a href="/login" className={styles.addBlog} type="button">
            Zaloguj się aby dodać post
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogCategories;
