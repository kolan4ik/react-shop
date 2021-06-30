import React from 'react';

export const BasketItem = ({ name, id, price, counter, removeFromBasket = Function.prototype, incrementGoods = Function.prototype, decrementGoods = Function.prototype }) => {
  return (
    <div class='collection-item'>
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
        <i onClick={() => removeFromBasket(id)} class='material-icons basket-remove'>
          close
        </i>
      </span>
    </div>
  );
};
