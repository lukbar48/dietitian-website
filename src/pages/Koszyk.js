import React from 'react';
import TitleHeader from 'components/TitleHeader';
import CartItem from 'components/CartItem';
import cartData from 'data/cartData';
import Button from 'components/Button';
import styles from './Koszyk.module.scss';

const Koszyk = () => {
  return (
    <>
      <TitleHeader>Koszyk</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.order}>
          <h2>Zawartość zamówienia</h2>
          <div className={styles.cart}>
            {cartData.map((item) => {
              return <CartItem {...item} />;
            })}
          </div>
          <div className={styles.summary}>
            <div className={styles.priceWrapper}>
              <h5>Łącznie:</h5>
              <span>1720 zł</span>
            </div>
            <div className={styles.buttons}>
              <Button secondary>Wyczyść koszyk</Button>
              <Button>Przejdź do płatności</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Koszyk;
