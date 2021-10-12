import React from 'react';
import Button from 'components/Button';
import coupleImg from 'assets/images/couple.png';
import styles from './HomeMain.module.scss';

const HomeMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <h1 className={styles.headerText}>Dietetyk online.</h1>
            <p className={styles.headerText}>Zyskaj zdrowie</p>
            <p className={styles.headerText}>i wymarzoną sylwetkę.</p>
            <p className={styles.headerText}>Bez wyrzeczeń.</p>
            <p className={styles.headerTextSmall}>Skorzystaj z profesjonalnej porady dietetyka.</p>
            <Button url="/oferta">Sprawdź ofertę</Button>
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <img className={styles.headerImage} src={coupleImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
