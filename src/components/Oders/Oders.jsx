import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Oders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
const Oders = () => {
    const savedCart = useLoaderData()
    const [cart,setCart] = useState(savedCart)

    const handelRemoveFromCart = id=>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    const handelClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }

    return (
            <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product=> <ReviewItem handelRemoveFromCart={handelRemoveFromCart} key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                
                <Cart 
                cart={cart}
                handelClearCart={handelClearCart}
                ><Link to={'/chackOut'}><button className='chack-out'>Proceed Checkout <FontAwesomeIcon className='arrow-icon' icon={faCreditCard} /></button></Link></Cart>
            </div>
        </div> 
    );
};

export default Oders;