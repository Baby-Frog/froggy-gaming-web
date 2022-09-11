import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();
function CartProvider(props) {
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [cartItems, setCartItems] = useState(storedCart);
  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.proId === newItem.proId);
      if (isExisted) {
        alert("That product is already existed in cart");
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      setStoredCart([...prevItems, newItem]);
      console.log([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }
  const value = { storedCart, cartItems, setStoredCart, addToCart };
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
