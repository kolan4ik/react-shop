import { useContext } from 'react';
import { ShopContent } from '../context';

export const BasketItem = ({ name, id, price, counter }) => {
  const { incrementGoods, decrementGoods, removeFromBasket } = useContext(ShopContent);
  return (
    <div className='collection-item'>
      {name} x{' '}
      <span className='calc'>
        <i onClick={() => incrementGoods(id)} className='material-icons'>
          add
        </i>
        <span className='calc_in'>{counter}</span>
        <i onClick={() => decrementGoods(id)} className='material-icons'>
          remove
        </i>
      </span>
      = {price * counter} рублей
      <span className='secondary-content'>
        <i onClick={() => removeFromBasket(id)} className='material-icons basket-remove'>
          close
        </i>
      </span>
    </div>
  );
};
