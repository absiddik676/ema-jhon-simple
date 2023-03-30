import React from 'react';
import './ShowProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const ShowProduct = (props) => {
    const{name,img,price,seller,ratings,id}= props.product;
    const handelProductAdded = props.handelProductAdded

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
            <button onClick={()=>handelProductAdded(props.product)} className='add-btn'>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default ShowProduct;