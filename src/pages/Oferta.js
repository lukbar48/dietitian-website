import React from 'react';
import { CgFileDocument, CgGym } from 'react-icons/cg';
import { BiMessageRounded } from 'react-icons/bi';
import { GiSmartphone, GiForkKnifeSpoon } from 'react-icons/gi';
import { BsLightning } from 'react-icons/bs';
import OfferBox from 'components/OfferBox';
import TitleHeader from 'components/TitleHeader';
import styles from './Oferta.module.scss';

const Oferta = () => {
  
  return (
    <>
      <TitleHeader>Oferta</TitleHeader>
      <div className={styles.main}>
        <h2>
          Pomogę Ci osiągnąć wymarzoną<br></br>sylwetkę i dobre samopoczucie!
        </h2>
        <h3>W ramach konsultacji otrzymasz:</h3>
        <div className={styles.offer}>
          <div className={styles.element}>
            <div className={styles.icon}>
              <CgFileDocument />
            </div>
            <div className={styles.description}>
              <h4>Indywidualny plan diety</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur, officia,
                fugit voluptate, libero recusandae repudiandae exercitationem provident ullam quis
                eaque officiis aperiam ipsam. Iusto quos possimus quo ipsam. Ducimus libero aliquid
                non rem.
              </p>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.icon}>
              <BiMessageRounded />
            </div>
            <div className={styles.description}>
              <h4>Stały kontakt ze mną</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur, officia,
                fugit voluptate, libero recusandae repudiandae exercitationem provident ullam quis
                eaque officiis aperiam ipsam.
              </p>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.icon}>
              <CgGym />
            </div>
            <div className={styles.description}>
              <h4>Efektywny plan treningowy</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur, officia,
                fugit voluptate, libero recusandae repudiandae exercitationem provident ullam quis
                eaque officiis aperiam ipsam. Iusto quos possimus quo ipsam. Ducimus libero aliquid
                non rem, ad ab excepturi exercitationem expedita asperiores.
              </p>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.icon}>
              <GiSmartphone />
            </div>
            <div className={styles.description}>
              <h4>Aplikację</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur, officia,
                fugit voluptate, libero recusandae repudiandae exercitationem provident ullam quis
                eaque officiis aperiam ipsam. Iusto quos possimus quo ipsam.
              </p>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.icon}>
              <BsLightning />
            </div>
            <div className={styles.description}>
              <h4>Wsparcie i motywację</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur, officia,
                fugit voluptate, libero recusandae repudiandae exercitationem provident ullam quis
                eaque officiis aperiam ipsam. Iusto quos possimus quo ipsam. Ducimus libero aliquid
                non rem, ad ab excepturi exercitationem.
              </p>
            </div>
          </div>

          <div className={styles.element}>
            <div className={styles.icon}>
              <GiForkKnifeSpoon />
            </div>
            <div className={styles.description}>
              <h4>Smaczne i proste przepisy</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur, officia,
                fugit voluptate, libero recusandae repudiandae exercitationem provident ullam quis
                eaque officiis aperiam ipsam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OfferBox/>
    </>
  );
};

export default Oferta;
