import React, { Component } from 'react';
import Slider from 'react-slick';
import people from 'data/metamorfozyData';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { IoScale } from 'react-icons/io5';
import { FaQuoteRight } from 'react-icons/fa';
import styles from './MetaSlider.module.scss';

const NextArrow = ({onClick}) => {
  return (
    <div className={styles.next} onClick={onClick} role="button" tabIndex={0} aria-hidden="true">
      <FiChevronRight />
    </div>
  );
};

const PrevArrow = ({onClick}) => {
  return (
    <div className={styles.prev} onClick={onClick} role="button" tabIndex={0} aria-hidden="true">
      <FiChevronLeft />
    </div>
  );
};

const MetaSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          nextArrow: false,
          prevArrow: false,
        }
      },
    ]
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>
          Moja dieta pomogła już ponad 176 podopiecznym. <br></br>
          Sprawdź ich metamorfozy!
        </h2>
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          {people.map((person) => {
            const { name, image, kg, text } = person;

            return (
              <div className={styles.person} key={name}>
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
        </Slider>
      </div>
    </div>
  );
};

export default MetaSlider;
