import React, { useState } from 'react';
import { AiOutlineCloseSquare, AiOutlineDoubleLeft } from 'react-icons/ai';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Button from './Button';
import styles from './AddedToBasket.module.scss';

const AddedToBasket = ({ setOpenModal, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <IoIosCheckmarkCircleOutline className={styles.tick} />
          <h3>{children}</h3>
          <button onClick={() => setOpenModal(false)} type="button">
            <AiOutlineCloseSquare />{' '}
          </button>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setOpenModal(false)} className={styles.backBtn} type="button">
            <AiOutlineDoubleLeft /> 
            <p> Kontynuuj zakupy</p>
          </button>
          <Button url='/koszyk'>Przejdź do koszyka</Button>
        </div>
      </div>
    </div>
  );
};

export default AddedToBasket;
