import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import styles from './OMnie.module.scss';
import manImage from '../assets/images/man.png';
import sportImage from '../assets/images/sport.jpg';
import clinicalImage from '../assets/images/clinical.jpg';
import TitleHeader from '../components/TitleHeader';

const OMnie = () => {
  return (
    <>
      <TitleHeader>O mnie</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <h2>Miło mi, że tu jesteś!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo labore, eos distinctio,
              dolorum sed deserunt, laborum illum delectus cupiditate asperiores autem nisi dicta
              iste aliquid molestias numquam deleniti eveniet? Aspernatur sit ipsum, ratione dolorum
              corrupti architecto illo expedita odio quam eaque obcaecati error at distinctio
              recusandae eligendi magni deserunt sapiente. Sapiente ratione fugiat aperiam unde!
              Voluptatem numquam distinctio harum inventore reiciendis odit illum, quam, vel
              commodi, expedita recusandae. Quasi consectetur modi minima quos recusandae a nihil
              quidem commodi aut ducimus! Quibusdam ad totam fugit, consequatur doloribus sed quia
              vel numquam eius illum ipsum id. Cum ullam accusantium et esse excepturi?
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi soluta aliquid
              expedita cumque perferendis ipsa deserunt? Aspernatur cum repellat illum iste
              perspiciatis qui nesciunt? Blanditiis dicta omnis ipsum deleniti, ea qui aperiam
              soluta a accusamus laboriosam quaerat. Exercitationem, ipsa.
            </p>
          </div>
          <div className={styles.aboutImage}></div>
        </div>
        <div className={styles.offer}>
          <div className={styles.sport}>
            <div className={styles.sportText}>
              <h3>Dietetyk sportowy - czym się zajmuje?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugiat? Optio
                neque expedita voluptate dolore et.
                <br></br>
                Id autem architecto dicta ipsum vero fugiat reprehenderit nostrum sit, excepturi
                dolor accusamus ipsam enim qui quidem deleniti praesentium dignissimos odio aliquam?
                <br></br>
                Odit iure nihil voluptas debitis? Totam illo hic quasi aliquam repudiandae sapiente
                mollitia alias, amet dolore modi nostrum molestiae dolores dignissimos quam.
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Totam illo hic quasi aliquam repudiandae sapiente.</li>
                </ul>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis eos commodi
                perspiciatis mollitia nemo minima quas odio nam ducimus.
              </p>
            </div>
            <div className={styles.sportImage}>
              <img src={sportImage} alt="" />
            </div>
          </div>
          <div className={styles.clinical}>
            <div className={styles.clinicalImage}>
              <img src={clinicalImage} alt="" />
            </div>
            <div className={styles.clinicalText}>
              <h3>Dietetyk kliniczny - czym się zajmuje?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugiat? Optio
                neque expedita voluptate dolore et, id autem architecto dicta ipsum vero fugiat
                reprehenderit nostrum sit, excepturi dolor accusamus ipsam enim qui quidem deleniti
                praesentium dignissimos odio aliquam?
                <br></br>
                Odit iure nihil voluptas debitis? Totam illo hic quasi aliquam repudiandae sapiente
                mollitia alias, amet dolore modi nostrum molestiae dolores dignissimos quam.
              </p>
            </div>
          </div>
          <div className={styles.offerButton}>
            <Button url="/oferta">Współpraca dietetyczna</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OMnie;
