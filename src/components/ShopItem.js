import React from 'react';
import { Link } from 'react-router-dom'
import { useGlobalContext } from 'contexts/context';
import { BsBasket3Fill } from 'react-icons/bs';
import Button from './Button';
import styles from './ShopItem.module.scss';

const ShopItem = ({ title, image, price, amount, id, setOpenModal }) => {
  const { addItem } = useGlobalContext();
  return (
    <div className={styles.item}>
      <div className={styles.imageWrapper}>
        <Link to={`/sklep/${id}`}>
          <img
            className={styles.image}
            src={require(`assets/images/${image}`).default}
            alt="produkt"
          />
        </Link>
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.title}>
          <h5>
            <Link className={styles.link} to={`/sklep/${id}`}>{title}</Link>
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
          <Button onClick={() => {
            addItem(id)
            setOpenModal(true)
          }}>
            Dodaj do koszyka <BsBasket3Fill className={styles.basketBtn} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
