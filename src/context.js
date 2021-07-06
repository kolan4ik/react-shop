import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContent = createContext();

const initialState = {
  goods: [],
  loadin: true,
  order: [],
  isVisibleBasket: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };
  value.addToBasket = item => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };
  value.removeFromBasket = id => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: {
        id,
      },
    });
  };

  value.handleBasketShow = id => {
    dispatch({
      type: 'HANDLE_BASKET_SHOW',
    });
  };
  value.incrementGoods = id => {
    dispatch({
      type: 'INC_GOODS',
      payload: {
        id,
      },
    });
  };
  value.decrementGoods = id => {
    dispatch({
      type: 'DEC_GOODS',
      payload: {
        id,
      },
    });
  };

  value.setGoods = data => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContent.Provider value={value}>{children}</ShopContent.Provider>;
};
