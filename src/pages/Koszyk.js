import React from 'react';
import TitleHeader from 'components/TitleHeader';
import CartItem from 'components/CartItem';
import Button from 'components/Button';
import { useGlobalContext } from 'contexts/context';
import styles from './Koszyk.module.scss';

const Koszyk = () => {
  const { clearCart, total, removeItem, cart } = useGlobalContext();
  return (
    <>
      <TitleHeader>Koszyk</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.order}>
          <h2>Zawartość zamówienia</h2>
          <div className={styles.cart}>
            {cart.map((item, index) => {
              return <CartItem key={index} {...item} />;
            })}
          </div>
          <div className={styles.summary}>
            <div className={styles.priceWrapper}>
              <h5>Łącznie:</h5>
              <span>{total} zł</span>
            </div>
            <div className={styles.buttons}>
              <Button onClick={clearCart} button secondary>
                Wyczyść koszyk
              </Button>
              <Button>Przejdź do płatności</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Koszyk;
