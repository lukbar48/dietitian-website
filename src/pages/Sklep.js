import React, { useState } from 'react';
import TitleHeader from 'components/TitleHeader';
import ShopItem from 'components/ShopItem';
import cartList from 'data/shopData';
import AddedToBasket from 'components/AddedToBasket';
import styles from './Sklep.module.scss';

const Sklep = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TitleHeader>Sklep</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.items}>
          {cartList.map((item) => {
            return <ShopItem setOpenModal={setOpenModal} key={item.id} {...item} />;
          })}
        </div>
        
        {openModal ? (
          <AddedToBasket setOpenModal={setOpenModal}>
            Przedmiot został dodany do koszyka
          </AddedToBasket>
        ) : null}
      </div>
    </>
  );
};

export default Sklep;
