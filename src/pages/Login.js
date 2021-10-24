import React, { useState } from 'react';
import Btn from 'components/Btn';
import styled, { css } from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const sharedStyles = css`
  background-color: #f6f6f6;
  height: 35px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 15px 10px;
  box-sizing: border-box;
`;
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  gap: 50px;
  margin: 120px 0 40px;
`;
const StyledForm = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h2 {
    padding-bottom: 25px;
    font-size: 1.3rem;
    font-weight: 500;
  }

  label {
    font-size: 0.9rem;
  }

  button {
    margin-bottom: -5px;
  }
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const Login = () => {
  const {
    login,
    logout,
    register,
    setLoginEmail,
    setLoginPassword,
    setRegisterEmail,
    setRegisterPassword,
    user,
    message
  } = useAuth();

  return (
    <StyledFormWrapper>
      <StyledForm>
        {user ? (
          <h3>{message}</h3>
        ) : (
          <>
            <h2>Zaloguj się</h2>
            <label htmlFor="name">
              Nazwa użytkownika lub e-mail *
              <StyledInput
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                type="text"
                name="name"
              />
            </label>
            <label htmlFor="password">
              Hasło *
              <StyledInput
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                type="password"
                name="password"
              />
            </label>
            <Btn onClick={login}>Zaloguj się</Btn>
          </>
        )}
      </StyledForm>

      <StyledForm>
        <h2>Zarejestruj się</h2>
        <label htmlFor="name">
          Adres e-mail *
          <StyledInput
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            type="e-mail"
            name="name"
          />
        </label>
        <label htmlFor="password">
          Hasło *
          <StyledInput
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            type="password"
            name="password"
          />
        </label>
        <Btn onClick={register} secondary>
          Zarejestruj się
        </Btn>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Login;
