import React from 'react';
import { useGlobalContext } from 'contexts/context';
import Button from './Button';
import styles from './ShopItem.module.scss';

const ShopItem = ({ title, image, price, amount, id }) => {
  const { addItem } = useGlobalContext();
  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <a href="/">
          <img
            className={styles.image}
            src={require(`assets/images/${image}`).default}
            alt="produkt"
          />
        </a>
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.title}>
          <h5>
            <a href="/">{title}</a>
          </h5>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur libero odit
            maiores ipsum mollitia.
          </p>
        </div>

        <div className={styles.price}>{price} zł</div>
        <div className={styles.button}>
          <Button onClick={() => addItem(id)}>Dodaj do koszyka</Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
