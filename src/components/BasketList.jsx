import { useContext } from 'react';
import { ShopContent } from '../context';
import { BasketItem } from './BasketItem';

export const BasketList = () => {
  const { order, handleBasketShow } = useContext(ShopContent);
  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price * item.counter;
  }, 0);
  return (
    <div className='collection basket-list'>
      <div className='collection-item active'>Корзина</div>
      {order.length ? order.map(item => <BasketItem key={item.id} {...item} />) : <div className='collection-item'>Тут пока нету товаров</div>}
      <div className='collection-item active'>Общаяя стоимость {totalPrice} рублей</div>
      <div className='collection-item  text-center'>
        <button className='btn btn-small'>Оформить</button>
      </div>
      <i onClick={handleBasketShow} className='material-icons basket-close'>
        close
      </i>
    </div>
  );
};
