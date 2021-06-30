import { useEffect } from 'react';

export const Alert = ({ name = '', closeAlert = Function.prototype }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  );
};
