import React from 'react';
import TitleHeader from 'components/TitleHeader';
import ShopItem from 'components/ShopItem';
import cartList from 'data/cartList';
import styles from './Sklep.module.scss';

const Sklep = () => {
  return (
    <>
      <TitleHeader>Sklep</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.items}>
          {cartList.map((item, index) => {
            return <ShopItem key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sklep;
