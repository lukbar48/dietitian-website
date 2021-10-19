import React from 'react';
import TitleHeader from 'components/TitleHeader';
import ContactForm from 'components/ContactForm';
import contactImage from 'assets/images/computer.jpg';
import styles from './Kontakt.module.scss';

const Kontakt = () => {
  return (
    <>
      <TitleHeader>Kontakt</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={contactImage} alt="contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
