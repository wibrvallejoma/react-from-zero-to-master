import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If cart item does not exist, add it to the array with quantity 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const decreaseCartItem = (cartItems, cartItemToRemove) => {
  // Find the cart item to remove.
  const existingCartItem = cartItems.find((cartItem) =>
    cartItem.id === cartItemToRemove.id
  );

  // If quantity > 1 decrease quantity.
  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) => 
      cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    );
  }
  // else remove item from cart
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  carCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(decreaseCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};