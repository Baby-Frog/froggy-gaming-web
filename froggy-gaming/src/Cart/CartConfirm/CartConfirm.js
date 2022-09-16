import React from "react";
import LoginForm from "../../Form/LoginForm";
import CartPayment from "../CartPayment/CartPayment";

const CartConfirm = () => {
  return (
    <div className="wrapper">
      {localStorage.getItem("roles") && <CartPayment></CartPayment>}
      {!localStorage.getItem("roles") && <LoginForm></LoginForm>}
    </div>
  );
};

export default CartConfirm;
