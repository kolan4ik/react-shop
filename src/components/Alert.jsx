import { useEffect, useContext } from 'react';
import { ShopContent } from '../context';

export const Alert = () => {
  const { alertName = '', closeAlert } = useContext(ShopContent);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [alertName]);
  return (
    <div id='toast-container'>
      <div className='toast'>{alertName} добавлен в корзину</div>
    </div>
  );
};
