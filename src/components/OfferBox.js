import React from 'react';
import { useGlobalContext } from 'contexts/context';
import Button from './Button';
import styles from './OfferBox.module.scss';
import Btn from './Btn';

const OfferBox = () => {
  const { addItem } = useGlobalContext();
  return (
    <div className={styles.wrapper}>
      <h2>Dołącz do ponad 500 zadowolonych pacjentów!</h2>

      <div className={styles.offerBoxes}>
        <div className={styles.box}>
          <div className={styles.header}>
            <h3>Wsparcie 1 miesięczne</h3>
          </div>
          <div className={styles.price}>
            <h4>299 zł</h4>
            <h5>299 zł / miesiąc</h5>
          </div>
          <div className={styles.offer}>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Sed quasi quidem ad repudiandae dolorum officiis, neque incidunt ullam.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, accusantium! Eius,
                aliquam.
              </li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Enim, accusantium! Eius, aliquam.</li>
            </ul>
          </div>
          <div className={styles.footer}>
            <a href="/koszyk">
              <Btn fontSize="1.05rem" onClick={() => addItem(1)}>
                Wybieram pakiet
              </Btn>
            </a>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.header}>
            <h3>Wsparcie 3 miesięczne</h3>
          </div>
          <div className={styles.price}>
            <h4>759 zł</h4>
            <h5>253 zł / miesiąc</h5>
          </div>
          <div className={styles.offer}>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Sed quasi quidem ad repudiandae dolorum officiis, neque incidunt ullam.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, accusantium! Eius,
                aliquam.
              </li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Enim, accusantium! Eius, aliquam.</li>
              <li>
                Animi soluta nihil suscipit atque, dolorum in illum itaque omnis rem mollitia hic
                non cum autem necessitatibus.
              </li>
            </ul>
          </div>
          <div className={styles.footer}>
            <a href="/koszyk">
              <Btn fontSize="1.05rem" onClick={() => addItem(1)}>
                Wybieram pakiet
              </Btn>
            </a>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.header}>
            <h3>Wsparcie 6 miesięczne</h3>
          </div>
          <div className={styles.price}>
            <h4>1399 zł</h4>
            <h5>233 zł / miesiąc</h5>
          </div>
          <div className={styles.offer}>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Sed quasi quidem ad repudiandae dolorum officiis, neque incidunt ullam.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, accusantium! Eius,
                aliquam.
              </li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Enim, accusantium! Eius, aliquam.</li>
              <li>
                Repellat sed animi amet eos, libero eveniet excepturi soluta quos reiciendis sint.
              </li>
              <li>
                Modi minus quaerat provident nobis ad soluta consequatur totam error, sed
                perferendis.
              </li>
            </ul>
          </div>
          <div className={styles.footer}>
            <a href="/koszyk">
              <Btn fontSize="1.05rem" onClick={() => addItem(1)}>
                Wybieram pakiet
              </Btn>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBox;
