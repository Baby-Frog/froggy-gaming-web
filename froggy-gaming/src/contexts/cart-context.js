import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();
function CartProvider(props) {
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [cartItems, setCartItems] = useState(storedCart);
  const { storedValue: storedQuantity, setValue: setStoredQuantity } =
    useLocalStorage("itemQuantity", 1);
  const [itemQuantity, setItemQuantity] = useState(storedQuantity);

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.proId === newItem.proId);
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      setCartItems([...prevItems, newItem]);
      setStoredCart([...prevItems, ...newItem]);
      return [...prevItems, newItem];
    });
  }
  function removeFromCart(removeItemId) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.proId !== removeItemId);
      setStoredCart(result);
      return result;
    });
  }

  function increaseQuantity(productId) {
    const updatedCart = cartItems.map((item) => {
      if (item.proId === productId) {
        return {
          ...item,
          totalPrice: item.proPrice * (item.quantity + 1),
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    setStoredCart(updatedCart);
  }

  function decreaseQuantity(productId) {
    const updatedCart = cartItems.map((item) => {
      if (item.quantity <= 1) {
        return { ...item };
      }
      if (item.proId === productId) {
        return {
          ...item,
          totalPrice: item.proPrice * (item.quantity - 1),
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    setStoredCart(updatedCart);
  }

  const value = {
    storedCart,
    cartItems,
    itemQuantity,
    storedQuantity,
    setStoredCart,
    setItemQuantity,
    setStoredQuantity,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (typeof context === "undefined") {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

export { useCart, CartProvider };
