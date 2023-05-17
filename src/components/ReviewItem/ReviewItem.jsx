import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product,handelRemoveFromCart}) => {
    const {_id,name,price,img,quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <p className='product-tital'>{name}</p>
                <p>Price: <span className='orang-text'>${price}</span></p>
                <p>Oder Quantity  :{quantity}</p>
            </div>
            <button onClick={()=>handelRemoveFromCart(_id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashCan} /></button>
        </div>

    );
};

export default ReviewItem;