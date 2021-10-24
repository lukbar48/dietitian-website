import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RiShoppingCart2Line as ShoppingCart } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import logo from 'assets/images/zywienienatak.jpg';
import { links, socials } from 'data/data';
import { useGlobalContext } from 'contexts/context';
import { useAuth } from 'contexts/AuthContext';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const { user, logout, login } = useAuth();
  const { amount} = useGlobalContext();
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
                  <NavLink
                    exact
                    activeClassName={styles.activeNavLink}
                    onClick={() => setShowSidebar(false)}
                    to={url}
                  >
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
          <NavLink
            onClick={() => setShowSidebar(!showSidebar)}
            className={styles.shoppingCart}
            to="/koszyk"
          >
            <ShoppingCart />{' '}
            <div className={styles.amountWrapper}>
              <span className={styles.totalAmount}>{amount}</span>
            </div>
          </NavLink>
          <NavLink
            onClick={() => {
              setShowSidebar(!showSidebar);
              if (user) {
                logout()
              }
            }}
            className={styles.login}
            to={user ? '/' : '/login'}
          >
            
            <span className={styles.loginText}><IoPersonOutline className={styles.loginIcon} />{user ? 'Wyloguj' : 'Zaloguj'}</span>
            {user ? (<p className={styles.loginUser}>{user.email}</p>) : null}
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
