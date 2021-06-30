import React, { useState, useEffect } from 'react';

import { API_KEY, API_URL } from '../config';
import { BasketList } from './BasketList';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';
import { Alert } from './Alert';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loadin, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isVisibleBasket, setIsVisibleBasket] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = param => {
    const itemIndex = order.findIndex(item => item.id === param.id);
    if (itemIndex < 0) {
      setOrder([
        ...order,
        {
          ...param,
          counter: 1,
        },
      ]);
    } else {
      const newState = order.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            counter: item.counter + 1,
          };
        } else {
          return item;
        }
      });
      setOrder([...newState]);
    }
    setAlertName(param.name);
  };

  const handleBasketShow = () => {
    setIsVisibleBasket(!isVisibleBasket);
  };
  const removeFromBasket = id => {
    const newBasket = order.filter(item => item.id !== id);
    setOrder(newBasket);
  };
  const incrementGoods = id => {
    const newBasket = order.map(item => {
      if (item.id === id) {
        return {
          ...item,
          counter: item.counter + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newBasket);
  };
  const decrementGoods = id => {
    const newBasket = order.map(item => {
      if (item.id === id) {
        return {
          ...item,
          counter: item.counter !== 0 ? item.counter - 1 : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newBasket);
  };

  const closeAlert = () => {
    setAlertName('');
  };
  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then(res => res.json())
      .then(data => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
      .catch(console.log);
  }, []);
  return (
    <main>
      <div className='container'>
        <Cart handleBasketShow={handleBasketShow} counter={order.length} />
        {loadin ? (
          <Preloader />
        ) : (
          <div className='goods'>
            <GoodsList addToBasket={addToBasket} goods={goods} />
          </div>
        )}
        {isVisibleBasket && <BasketList decrementGoods={decrementGoods} incrementGoods={incrementGoods} removeFromBasket={removeFromBasket} handleBasketShow={handleBasketShow} orders={order} />}
      </div>
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};
