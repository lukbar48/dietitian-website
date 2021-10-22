import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import postsData from 'data/postsData';
import Button from './Button';
import styles from './AddBlogForm.module.scss';

const AddBlogForm = ({ setOpenForm }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (Math.random()*1000000).toFixed()*1
    const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
    const newPost = {
      title,
      image,
      category,
      text,
      date,
      id
    };

    postsData.unshift(newPost);
    setOpenForm(false);
    localStorage.setItem('blogItems', JSON.stringify(postsData));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h3>Dodaj nowy post</h3>
          <button onClick={() => setOpenForm(false)} type="button">
            <AiOutlineCloseSquare />{' '}
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tytuł"
            maxLength={150}
            className={styles.input}
          />
          <input
            required
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Zdjęcie (url)"
            maxLength={200}
            className={styles.input}
          />
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
            name="category"
          >
            <option value="" disabled defaultValue>
              Kategoria:
            </option>
            <option value="zdrowie">Zdrowie</option>
            <option value="suplementacja">Suplementacja</option>
            <option value="sport">Sport</option>
            <option value="przepisy">Przepisy</option>
            <option value="inne">Inne</option>
          </select>
          <textarea
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
            placeholder="Treść"
          ></textarea>
          <Button button>Dodaj</Button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
