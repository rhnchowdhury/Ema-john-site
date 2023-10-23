import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart-section'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:</p>
        </div>
    );
};

export default Cart;