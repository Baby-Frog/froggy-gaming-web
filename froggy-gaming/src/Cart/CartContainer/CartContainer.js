import React from "react";
import LoginForm from "../../Form/LoginForm";
import CartBasket from "../CartBasket/CartBasket";
import "./styles/CartContainer.css";

const CartContainer = () => {
  return (
    <div className="wrapper">
      {localStorage.getItem("roles") && <CartBasket></CartBasket>}
      {!localStorage.getItem("roles") && <LoginForm></LoginForm>}
    </div>
  );
};

export default CartContainer;
