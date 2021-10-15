import React, { useState } from 'react';
import people from 'data/metamorfozyData';
import classnames from 'classnames';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { IoScale } from 'react-icons/io5';
import { FaQuoteRight } from 'react-icons/fa';
import styles from './Metamorfozy.module.scss';

const Metamorfozy = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>
          Moja dieta pomogła już ponad 176 podopiecznym. <br></br>
          Sprawdź ich metamorfozy!
        </h2>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {people.map((person) => {
            const { name, image, kg, text } = person;

            let position = 'rightSlide';

            return (
              <div className={`${styles.person}`} key={name}>
                <img
                  className={styles.image}
                  src={require(`assets/images/metamorfozy/${image}`).default}
                  alt={name}
                />
                <div className={styles.description}>
                  <h5>{name}</h5>
                  <p>{text}</p>
                  <div className={styles.scale}>
                    <IoScale />
                    <h6>{kg}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className={styles.buttonLeft} type="button">
          <FiChevronLeft />{' '}
        </button>
        <button className={styles.buttonRight} type="button">
          <FiChevronRight />{' '}
        </button>
      </div>
    </div>
  );
};

export default Metamorfozy;
