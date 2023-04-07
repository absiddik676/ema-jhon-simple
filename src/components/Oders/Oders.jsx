import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Oders.css'
import { removeFromDb } from '../../utilities/fakedb';
const Oders = () => {
    const savedCart = useLoaderData()
    const [cart,setCart] = useState(savedCart)

    const handelRemoveFromCart = id=>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    return (
            <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product=> <ReviewItem handelRemoveFromCart={handelRemoveFromCart} key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
            </div>
        </div> 
    );
};

export default Oders;