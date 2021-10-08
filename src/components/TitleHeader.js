import React from 'react';
import styles from './TitleHeader.module.scss';

const TitleHeader = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.underline}></div>
    </div>
  );
};

export default TitleHeader;
