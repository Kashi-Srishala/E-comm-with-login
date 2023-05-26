import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [addedButtons, setAddedButtons] = useState([]);

  const addToCart = (buttonId) => {
    if (!addedButtons.includes(buttonId)) {
      setCartCount(cartCount + 1);
      setAddedButtons([...addedButtons, buttonId]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};