// import { useGlobalContext } from 'contexts/context';
import cartList from '../data/cartList';

function reducer(state, action) {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [], amount: 0 };
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
      const obj = Object.assign({}, ...newItem);

      state.cart.map((item) => {
        if (item.id === obj.id) {
          newItem = null
          alert('Wybrany przedmiot jest już w koszyku!')
        }
        return item;
      });


      // state.cart.map((item) => {
      //   if (item.id === obj.id) {
      //     newItem = null;
      //     item.amount += 1;
      //   }
      //   return item;
      // });

      // console.log(state);

      if (newItem) {
        // console.log('dodano nowy przedmiot')
        return { ...state, cart: state.cart.concat(...newItem)};
      } else {
        // console.log('zwiększono ilość przedmiotu')
        // console.log(state.cart.map(item=>item.amount));
        // console.log(state.cart)
        return { ...state};
      }
      // return { ...state, cart: state.cart.concat(...newItem)};
    }
    case 'GET_TOTAL': {
      const { total, amount } = state.cart.reduce(
        (totalValue, amountValue) => {
          const { price, amount } = amountValue;
          const multiplyValue = price * amount;

          totalValue.total += multiplyValue;
          totalValue.amount += amount;
          return totalValue;
        },
        {
          total: 0,
          amount: 0,
        },
      );
      const fixedTotal = total.toFixed(2);
      return { ...state, amount, total: fixedTotal };
    }
    default:
      throw new Error('wrong operation');
  }
}

export default reducer;
