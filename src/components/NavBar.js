import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RiShoppingCart2Line as ShoppingCart } from 'react-icons/ri';
import { IoPersonOutline } from "react-icons/io5";
import logo from 'assets/images/zywienienatak.jpg';
import { links, socials } from 'data/data';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const linksRef = useRef(null);
  const linksListRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksListRef.current.getBoundingClientRect().height;
    if (showSidebar) {
      linksRef.current.style.height = `${linksHeight}px`;
    } else {
      linksRef.current.style.height = `0px`;
    }
  }, [showSidebar]);
  return (
      <nav>
        <header className={styles.center}>
          <div className={styles.header}>
            <NavLink to="/">
              <img src={logo} className={styles.logo} alt="logo" />
            </NavLink>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              type="button"
              className={styles.mobileNav}
            >
              <FaBars />
            </button>
          </div>
          <div ref={linksRef} className={styles.links}>
            <ul ref={linksListRef} className={styles.linksList}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <NavLink exact activeClassName={styles.activeNavLink} onClick={() => setShowSidebar(false)} to={url}>
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul
            className={
              showSidebar
                ? `${styles.miniWidgets} ${styles.miniWidgetsActive}`
                : `${styles.miniWidgets}`
            }
          >
            <NavLink className={styles.shoppingCart} to="/koszyk">
              <ShoppingCart />{' '}
            </NavLink>
            <NavLink className={styles.login} to="/login">
              <IoPersonOutline /><p>Zaloguj</p>
            </NavLink>
            {socials.map((social) => {
              const { id, url, icon } = social;
              return (
                <li key={id}>
                  <a target="_blank" rel="noreferrer" href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>
      </nav>
  );
};

export default NavBar;
