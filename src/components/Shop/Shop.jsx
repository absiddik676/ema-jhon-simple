import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
        useEffect(()=>{
        fetch(('products.json'))
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handelProductAdded = product =>{
        const newCart = [...cart,product]
        setCart(newCart)
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
                
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;