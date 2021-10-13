import React, { useState } from 'react';
import Button from './Button';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      name,
      email,
      content,
    };
  }

  return (
    <div className={styles.formWrapper}>
      <h2>Formularz kontaktowy</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.name}
          type="text"
          placeholder="Imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="35"
          required
        />
        <input
          className={styles.email}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength="35"
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Treść"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          cols="30"
          rows="10"
          required
        ></textarea>
        <label className={styles.label} htmlFor="polityka">
          <input type="checkbox" id="polityka" name="polityka" value="Boat" required />

          <span>
            Przeczytałem i akceptuję <a href="/polityka-prywatnosci">Politykę prywatności</a>.*
          </span>
        </label>
        <button type="submit">
          <Button>Wyślij</Button>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
