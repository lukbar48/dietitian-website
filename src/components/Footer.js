import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { miniNavLinks, socials } from '../data';
import logo from '../assets/images/zywienienatak.jpg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavLink to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </NavLink>
      <p className={styles.info}>© 2021 - Żywienie na tak</p>
      <div className={styles.links}>
        <ul className={styles.linksList}>
          {miniNavLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <li className={styles.linksListItem} key={id}>
                <NavLink exact activeClassName={styles.activeMiniNavLink} to={url}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className={styles.socials}>
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li className={styles.socialsItem} key={id}>
              <a target="_blank" rel="noreferrer" href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
