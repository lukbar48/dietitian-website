import React, { useReducer, useContext, useEffect } from 'react';
import reducer from '../reducers/reducer';
import cartData from '../data/cartData';

const AppContext = React.createContext();

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ addItem, clearCart, changeAmount, removeItem, ...state }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
  return useContext(AppContext);
};
