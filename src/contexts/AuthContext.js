import React, { useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import auth from '../firebase-config';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState();

  // const signup = (email, password) => {
  //   return auth.createUserWithEmailAndPassword(email, password);
  // };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  const [user, setUser] = useState({});
  const [message, setMessage] = useState();

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      setMessage('Pomyślnie zalogowano!')
    } catch (error) {
      setMessage('Nieprawidłowe dane, hasło powinno mieć co najmniej 6 znaków.')
      console.log(error.message);
    }
    setRegisterEmail('')
    setRegisterPassword('')
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setMessage('Pomyślnie zalogowano!')
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setMessage('Nieprawidłowe dane! Odśwież stronę i zaloguj ponownie.')
    }
  };

  const logout = async () => {
    await signOut(auth);
    setMessage('')
    console.log(user)
  };

  // const value = {user, setUser, register, login, logout, setLoginEmail, setLoginPassword, setRegisterEmail, setRegisterPassword, message }

  return <AuthContext.Provider value={{user, setUser, register, login, logout, setLoginEmail, setLoginPassword, setRegisterEmail, setRegisterPassword, message }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
export const useAuth = () => {
  return useContext(AuthContext);
};
