import { createContext, useState, useEffect } from "react";
const addcart = (CartItems, ProducttoAdd) => {
  const existingCartItem = CartItems.find(
    (cartItem) => cartItem.id === ProducttoAdd.id
  );

  if (existingCartItem) {
    return CartItems.map((cartItem) =>
      cartItem.id === ProducttoAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...CartItems, { ...ProducttoAdd, quantity: 1 }];
};
const removecart = (CartItems, ProducttoRemove) => {
  const existingItem = CartItems.find(
    (cartItem) => cartItem.id === ProducttoRemove.id
  );

  if (existingItem.quantity === 1) {
    return CartItems.filter((cartItem) => cartItem.id !== ProducttoRemove.id);
  }
  return CartItems.map((cartItem) =>
    cartItem.id === ProducttoRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearitem = (ProducttoClear, CartItems) => {
  return CartItems.filter((cartitem) => cartitem.id !== ProducttoClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearCartItem: () => {},
  cartCount: 0,
  totalItem: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    const newCartCount = CartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [CartItems]);
  useEffect(() => {
    const newcartTotal = CartItems.reduce(
      (total, cartitem) => total + cartitem.quantity * cartitem.price,
      0
    );
    setTotalItem(newcartTotal);
  }, [CartItems]);

  const addItemToCart = (ProducttoAdd) => {
    setCartItems(addcart(CartItems, ProducttoAdd));
  };
  const removeItemToCart = (ProducttoRemove) => {
    setCartItems(removecart(CartItems, ProducttoRemove));
  };

  const clearCartItem = (ProducttoClear) => {
    setCartItems(clearitem(ProducttoClear, CartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    CartItems,
    cartCount,
    removeItemToCart,
    clearCartItem,
    totalItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
