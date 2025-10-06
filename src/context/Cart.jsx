import { createContext, useContext, useState, useRef, useEffect } from "react";

const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    console.log("Final cart state:", cartItems);
  }, [cartItems]);

  const [totalQuantity, setTotalQuantity] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("cart"))?.reduce(
        (sum, item) => sum + item.quantity,
        0
      ) || 0
    );
  });

  const updateCart = (updatedCart = []) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const total = updatedCart.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0
    );

    console.log(total);
    setCartItems(updatedCart);
    setTotalQuantity(total);
  };

  const isProcessing = useRef(false);

  const addToCart = (product) => {
    if (isProcessing.current) return;
    setCartItems((prevCart = []) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.color === product.color
      );

      let updatedCart;
      if (existingItemIndex !== -1) {
        updatedCart = prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      updateCart(updatedCart);
      return updatedCart;
    });

    setTimeout(() => {
      isProcessing.current = false;
    }, 100);
  };

  const removeItem = (productId, color) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === productId && item.color === color)
    );
    updateCart(updatedCart);
  };

  const changeQuantity = (productId, amount, color) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.color === color
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    updateCart(updatedCart);
    return updatedCart;
  };

  return (
    <Cart.Provider
      value={{
        cartItems,
        totalQuantity,
        removeItem,
        changeQuantity,
        addToCart,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const useCart = () => useContext(Cart);
