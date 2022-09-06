import React from 'react';
import CartBasket from '../../CartBasket/components/CartBasket';
import "../styles/CartContainer.css"

const CartContainer = () => {
    return (
        <div className="wrapper">
            <CartBasket></CartBasket>
        </div>
    );
};

export default CartContainer;