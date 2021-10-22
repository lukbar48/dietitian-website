import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from 'contexts/context';
import { BsBasket3Fill } from 'react-icons/bs';
import shopData from 'data/shopData';
import Button from 'components/Button';
import styles from './ShowShopItem.module.scss';

const ShowShopItem = () => {
  const { id } = useParams();
  const { addItem } = useGlobalContext();

  let getItem = shopData.filter((item) => item.id === id * 1);
  getItem = Object.assign({}, ...getItem);
  const { title, image, price, category } = getItem;
  
  return (
      <div className={styles.wrapper}>
        <div className={styles.product}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={require(`assets/images/${image}`).default} alt={title} />
          </div>
          <div className={styles.descriptionWrapper}>
          <div className={styles.category}>Kategoria: {category}</div>
            <h2>{title}</h2>
            <div className={styles.price}>{price} zł</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem odit qui
              praesentium dolore autem accusamus explicabo sint, non totam!
            </p>
            <Button onClick={() => addItem(id*1)} url='/koszyk'>
              Dodaj do koszyka <BsBasket3Fill className={styles.basketBtn} />
            </Button>
            
          </div>
        </div>
      </div>
  );
};

export default ShowShopItem;
