import React from 'react';
import './ShowProduct.css'
const ShowProduct = (props) => {
    console.log(props);
    const{name,img,price,seller,ratings}= props.product
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: {price}$</p>
                <p className='Manufacturer'>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button className='add-btn'>Add to Cart</button>
        </div>
    );
};

export default ShowProduct;