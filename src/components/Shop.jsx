import React, { useEffect, useContext } from 'react';

import { API_KEY, API_URL } from '../config';
import { BasketList } from './BasketList';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { Alert } from './Alert';

import { ShopContent } from '../context';

export const Shop = () => {
  const { loadin, order, isVisibleBasket, alertName, setGoods } = useContext(ShopContent);

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then(res => res.json())
      .then(data => {
        setGoods(data.featured);
      })
      .catch(console.log);
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      <div className='container'>
        <Cart counter={order.length} />
        {loadin ? (
          <Preloader />
        ) : (
          <div className='goods'>
            <GoodsList />
          </div>
        )}
        {isVisibleBasket && <BasketList />}
      </div>
      {alertName && <Alert />}
    </main>
  );
};
