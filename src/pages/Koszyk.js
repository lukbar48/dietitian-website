import React from 'react';
import TitleHeader from 'components/TitleHeader';
import CartItem from 'components/CartItem';
import Button from 'components/Button';
import { useGlobalContext } from 'contexts/context';
import styles from './Koszyk.module.scss';

const Koszyk = () => {
  const { clearCart, total, cart, amount, login } = useGlobalContext();
  return (
    <>
      <TitleHeader>Koszyk</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.order}>
          <h2>Zawartość zamówienia</h2>
          {amount ? (
            <>
              <div className={styles.cart}>
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
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
                  {login ? (
                    <Button url="/koszyk/zakup">Przejdź do płatności</Button>
                  ) : (
                    <Button url="/login">Zaloguj się aby dokończyć zakup</Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <h3 className={styles.emptyBasket}>
              Nie dodałeś jeszcze żadnego elementu do swojego zamówienia.{' '}
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Koszyk;
