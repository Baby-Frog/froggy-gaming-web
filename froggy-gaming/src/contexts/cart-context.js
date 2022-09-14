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
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [addedFailed, setAddedFailed] = useState(false);

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.proId === newItem.proId);
      console.log(isExisted);
      if (isExisted) {
        setAddedFailed(true);
        setAddedSuccess(false);
        setStoredCart([...prevItems]);
        setTimeout(() => {
          setAddedFailed(false);
        }, 3000);
        return [...prevItems];
      }
      setAddedSuccess(true);
      setStoredCart([...prevItems, newItem]);
      setTimeout(() => {
        setAddedSuccess(false);
      }, 3000);
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

  function removeAllFromCart() {
    setCartItems([]);
    setStoredCart([]);
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
    addedSuccess,
    addedFailed,
    setStoredCart,
    setItemQuantity,
    setStoredQuantity,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    removeFromCart,
    removeAllFromCart,
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
