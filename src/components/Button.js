import React from 'react';
import styles from 'components/Button.module.scss';

const Button = ({ children, url, secondary, button, onClick }) => {
  
  return (
    <div className={styles.buttonContainer}>
      {button ? (
        <button onClick={onClick} className={styles.button} type="submit"  style={ secondary ? {backgroundColor: '#26E0B8'} : {backgroundColor: '#FF8200'}}>{children}</button>
      ) : (<a href={url} onClick={onClick} className={styles.button} style={ secondary ? {backgroundColor: '#26E0B8'} : {backgroundColor: '#FF8200'}}>
        {children}
      </a>)}
    </div>
  );
};

export default Button;
