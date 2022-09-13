import { random } from "lodash";
import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();
function CartProvider(props) {
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [cartItems, setCartItems] = useState(storedCart);
  // const { storedValue: storedItemQuantity, setValue: setStoredItemQuantity } =
  //   useLocalStorage("itemQuantity", 1);
  const [itemQuantity, setItemQuantity] = useState(1);
  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.proId === newItem.proId);
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // const proQuantity = { quantity: storedItemQuantity };
      setCartItems([...prevItems, newItem]);
      setStoredCart([...prevItems, ...newItem]);
      //   [...prevItems, newItem].forEach((item) => {
      //     const randomObj2 = Object.assign(item, proQuantity);
      //     setStoredCart({ ...randomObj2 });
      //     return { ...randomObj2 };
      //   })
      // );

      // console.log([...prevItems, newItem]);
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
  const value = {
    storedCart,
    cartItems,
    itemQuantity,
    // storedItemQuantity,
    setStoredCart,
    setItemQuantity,
    // setStoredItemQuantity,
    addToCart,
    removeFromCart,
    // removeFromCartByZero,
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
