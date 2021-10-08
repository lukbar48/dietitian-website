import React from 'react';
import styles from './OMnie.module.scss';
import manImage from '../assets/images/man.png';
import TitleHeader from '../components/TitleHeader';

const OMnie = () => {
  return (
    <>
      <TitleHeader>O mnie</TitleHeader>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.text}>
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
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </>
  );
};

export default OMnie;
