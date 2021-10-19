import React from 'react';
import { BiPlus, BiMinus, BiX } from 'react-icons/bi';
import { useGlobalContext } from 'contexts/context';
import styles from './CartItem.module.scss';

const CartItem = ({ title, image, price, amount, id }) => {
  const { removeItem, changeAmount } = useGlobalContext();

  return (
    <>
      <article className={styles.cartItem}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={require(`assets/images/${image}`).default}
            alt="produkt"
          />
        </div>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.amountContainer}>
          <button
            onClick={() => changeAmount(id, 'minus')}
            className={styles.amountBtn}
            type="button"
          >
            <BiMinus />{' '}
          </button>
          <p className={styles.amount}>{amount}</p>
          <button
            onClick={() => changeAmount(id, 'plus')}
            className={styles.amountBtn}
            type="button"
          >
            <BiPlus />{' '}
          </button>
        </div>
        <div className={styles.priceContainer}>
          <h5>{`${price} zł`}</h5>
          <button type="button" onClick={() => removeItem(id)}>
            <BiX />
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
