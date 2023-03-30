import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(('products.json'))
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <ShowProduct key={product.id} product={product}></ShowProduct>)
                }
            </div>
            <div className="cart-container">
                <h2>oder summary</h2>
            </div>
        </div>
    );
};

export default Shop;