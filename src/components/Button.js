import React from 'react';
import styles from 'components/Button.module.scss';

const Button = ({ children, url }) => {
  return (
    <div className={styles.buttonContainer}>
      <a href={url} className={styles.button}>
        {children}
      </a>
    </div>
  );
};

export default Button;
