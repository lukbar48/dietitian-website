import React, { useReducer, useContext, useEffect, useState } from 'react';
import reducer from '../reducers/reducer';

const AppContext = React.createContext();

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem('cartItems');
    return localData
      ? JSON.parse(localData)
      : initialState;
  });

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const addItem = (id) => {
    dispatch({ type: 'ADD_ITEM', payload: id });
  };
  const changeAmount = (id, type) => {
    dispatch({ type: 'CHANGE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    localStorage.setItem('cartItems', JSON.stringify(state));
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ setLogin, login, addItem, clearCart, changeAmount, removeItem, ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
  return useContext(AppContext);
};
