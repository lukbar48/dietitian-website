import React from 'react';
import styles from 'components/Button.module.scss';

const Button = ({ children, url, color }) => {
  return (
    <div className={styles.buttonContainer}>
      <a href={url} className={styles.button} style={ color ? {backgroundColor: '#26E0B8'} : {backgroundColor: '#FF8200'}}>
        {children}
      </a>
    </div>
  );
};

export default Button;
