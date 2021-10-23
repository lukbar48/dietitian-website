import Btn from 'components/Btn';
import React from 'react';
import styled, { css } from 'styled-components';
import TitleHeader from 'components/TitleHeader';

const sharedStyles = css`
  background-color: #F6F6F6;
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
  margin: 120px 0 40px
`;

const StyledForm = styled.form`
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Zaloguj się</h2>
          <label htmlFor="name">
            Nazwa użytkownika lub e-mail *
            <StyledInput type="text" name="name" />
          </label>
          <label htmlFor="password">
            Hasło *
            <StyledInput type="password" name="password" />
          </label>
          <Btn type='submit'>Zaloguj się</Btn>
        </StyledForm>

        <StyledForm onSubmit={handleSubmit}>
          <h2>Zarejestruj się</h2>
          <label htmlFor="name">
            Adres e-mail *
            <StyledInput type="e-mail" name="name" />
          </label>
          <label htmlFor="password">
            Hasło *
            <StyledInput type="password" name="password" />
          </label>
          <Btn type='submit' secondary>Zarejestruj się</Btn>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Login;
