import { createContext } from 'react';

export const ShopContent = createContext();

export const ContextProvider = ({ children }) => {
  const value = {
    example: 'Hello context',
  };
  return <ShopContent.Provider value={value}>{children}</ShopContent.Provider>;
};
