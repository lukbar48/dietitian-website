import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
  padding: 10px 25px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  margin: 20px 0;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize || '0.9rem'};
  box-shadow: 0 12px 24px 0 rgb(212, 212, 212);
  text-decoration: none;
  background-color: #ff8200;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #26e0b8;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export default Btn;
