import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Strona główna',
  },
  {
    id: 2,
    url: '/o-mnie',
    text: 'O mnie',
  },
  {
    id: 3,
    url: '/oferta',
    text: 'Oferta',
  },
  {
    id: 4,
    url: '/sklep',
    text: 'Sklep',
  },
  {
    id: 5,
    url: '/przepisy',
    text: 'Przepisy',
  },
  {
    id: 6,
    url: '/blog',
    text: 'Blog',
  },
  {
    id: 7,
    url: '/kontakt',
    text: 'Kontakt',
  },
];

export const miniNavLinks = [
  {
    id: 1,
    url: '/regulamin',
    text: 'Regulamin',
  },
  {
    id: 2,
    url: '/polityka-prywatnosci',
    text: 'Polityka prywatności',
  },
  {
    id: 3,
    url: '/sklep',
    text: 'Sklep',
  },
  {
    id: 4,
    url: '/kontakt',
    text: 'Kontakt',
  },
];

export const socials = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
];
