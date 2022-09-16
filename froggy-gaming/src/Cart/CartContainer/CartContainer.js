import React from "react";
import DemoLoginForm from "../../Form/LoginForm";
import CartBasket from "../CartBasket/CartBasket";
import "./styles/CartContainer.css";

const CartContainer = () => {
  return (
    <div className="wrapper">
      {localStorage.getItem("roles") && <CartBasket></CartBasket>}
      {!localStorage.getItem("roles") && <DemoLoginForm></DemoLoginForm>}
    </div>
  );
};

export default CartContainer;
