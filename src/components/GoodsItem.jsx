import { useState } from 'react';

export const GoodsItem = ({ id, name, description, price, full_background, addToBasket }) => {
  const [isBasket, setIsBasket] = useState(false);

  const addToBasketHandler = (id, name, description, price, full_background) => {
    addToBasket(id, name, description, price, full_background);
    setIsBasket(true);
  };

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          onClick={() => {
            addToBasketHandler({
              id,
              name,
              description,
              price,
              full_background,
            });
          }}
          className='btn'
        >
          {isBasket ? 'В корзине' : 'Купить'}
        </button>
        <span style={{ fontSize: '1.8rem' }} className='right'>
          {price} руб.
        </span>
      </div>
    </div>
  );
};
