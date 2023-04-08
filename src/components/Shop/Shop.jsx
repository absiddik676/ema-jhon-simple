import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
        useEffect(()=>{
        fetch(('products.json'))
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const strored = getShoppingCart()
        const saveCart = []
        // step 1 get id
        for(const id in strored){
            // step 2 get data using id
            const saveProduct = products.find(p=> p.id == id)
            if(saveProduct){
                const quantity = strored[id];
                saveProduct.quantity = quantity
                saveCart.push(saveProduct)
            }
        }
        setCart(saveCart)
    },[products])

    const handelProductAdded = product =>{
        let newCart = [];
        const isExit = cart.find(pd => pd.id === product.id)
        if(!isExit){
            product.quantity = 1
            newCart=[...cart,product]
        }else{
            isExit.quantity = isExit.quantity + 1;
            const remaining = cart.filter(pd => pd.id != product.id)
            newCart = [...remaining,isExit]
        }
        setCart(newCart)
        addToDb(product.id)
    }


    const handelClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <ShowProduct
                        key={product.id}
                        product={product}
                        handelProductAdded={handelProductAdded}>
                        </ShowProduct>)
                }
            </div>
            <div className="cart-container">
                
                <Cart cart={cart} handelClearCart={handelClearCart}>
                    <Link to={'/oders'}><button className='btn-review'>Review Oder <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} /></button></Link>
                    </Cart>
            </div>
        </div>
    );
};

export default Shop;