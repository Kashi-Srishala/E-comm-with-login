import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, newProduct]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};







// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [addedButtons, setAddedButtons] = useState([]);

//   const addToCart = (buttonId) => {
//     if (!addedButtons.includes(buttonId)) {
//       setCartCount(cartCount + 1);
//       setAddedButtons([...addedButtons, buttonId]);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartCount,
//         addToCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };