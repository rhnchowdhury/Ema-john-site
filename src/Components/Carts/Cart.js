import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // total price & shipping calculate
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    };

    // tax calculate for 10%
    const tax = (total * 0.1).toFixed(2);

    // Grand total calculate
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='cart-section'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Price: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;