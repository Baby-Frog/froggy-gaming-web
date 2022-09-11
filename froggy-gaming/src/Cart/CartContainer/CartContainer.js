import React from "react";
import CartBasket from "../CartBasket/CartBasket";
import "./styles/CartContainer.css";

const CartContainer = () => {
  return (
    <div className="wrapper">
      <CartBasket></CartBasket>
    </div>
  );
};

export default CartContainer;
