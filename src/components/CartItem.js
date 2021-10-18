import React from 'react';
import { BiPlus, BiMinus, BiX } from "react-icons/bi";

import styles from './CartItem.module.scss';

const CartItem = ({ title, image, price, amount }) => {
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
          <button className={styles.amountBtn} type="button"><BiPlus /> </button>
          <p className={styles.amount}>{amount}</p>
          <button className={styles.amountBtn} type="button"><BiMinus /> </button>
        </div>
        <div className={styles.priceContainer}>
          <h5>{`${price} zł`}</h5>
          <span><BiX /></span>
          </div>
      </article>
    </>
  );
};

export default CartItem;
