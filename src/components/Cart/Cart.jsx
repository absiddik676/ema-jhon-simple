import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const totalPrice = cart.reduce((preview,current)=> preview + current.price * current.quantity,0)
    const shippingCost = cart.reduce((preview,current)=> preview + current.shipping,0)
    const quantity = cart.reduce((preview,current)=> preview + current.quantity,0)
    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + shippingCost + tax;
    return (
        <div className='cart'>
            <h2 className='title'>oder summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;