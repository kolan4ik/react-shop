import { BasketItem } from './BasketItem';

export const BasketList = ({ orders = [], incrementGoods = Function.prototype, decrementGoods = Function.prototype, handleBasketShow = Function.prototype, removeFromBasket = Function.prototype }) => {
  const totalPrice = orders.reduce((acc, item) => {
    return acc + item.price * item.counter;
  }, 0);
  return (
    <div className='collection basket-list'>
      <div className='collection-item active'>Корзина</div>
      {orders.length ? orders.map(item => <BasketItem decrementGoods={decrementGoods} incrementGoods={incrementGoods} removeFromBasket={removeFromBasket} key={item.id} {...item} />) : <div className='collection-item'>Тут пока нету товаров</div>}
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