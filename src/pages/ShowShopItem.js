import React from 'react';
import styles from './Error.module.scss';

const Error = () => {

  return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>404 Site not found</h2>
        </div>
      </div>
  );
};

export default Error;
