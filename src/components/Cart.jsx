import { useContext } from 'react';
import { ShopContent } from '../context';

export const Cart = ({ counter = 0 }) => {
  const { handleBasketShow } = useContext(ShopContent);
  return (
    <div onClick={handleBasketShow} className='basket-icon grey darken-2 white-text  '>
      <i className='material-icons'>shopping_cart</i>
      {counter ? <span className='basket-counter'>{counter}</span> : null}
    </div>
  );
};
