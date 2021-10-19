import cartList from '../data/cartList';

function reducer(state, action) {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'CHANGE_AMOUNT': {
      let newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === 'plus') {
              return { ...item, amount: item.amount + 1 };
            } else if (action.payload.type === 'minus') {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: newCart };
    }
    case 'ADD_ITEM': {
      let newItem = cartList.filter((item) => item.id === action.payload);
      // newItem = Object.assign({}, ...newItem );
      // console.log(state.cart)
      return { ...state, cart: newItem };
    }

    default:
      throw new Error('wrong operation');
  }
}

export default reducer;
