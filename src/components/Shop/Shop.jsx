import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [currentPage,setCurrentPage] = useState(0);
    const [totalPageNumber,seTotalPageNumber]  = useState(10)
    const { totalProducts } = useLoaderData();
    const totalPage = Math.ceil(totalProducts / totalPageNumber)

    const pageNumbers = [...Array(totalPage).keys()]
    const options = [5,10,20]


    useEffect(() => {
        fetch((`http://localhost:5000/product?page=${currentPage}&limit=${totalPageNumber}`))
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage,totalPageNumber])

    useEffect(() => {
        const strored = getShoppingCart()
        const saveCart = []
        // step 1 get id
        for (const id in strored) {
            // step 2 get data using id
            const saveProduct = products.find(p => p._id == id)
            if (saveProduct) {
                const quantity = strored[id];
                saveProduct.quantity = quantity
                saveCart.push(saveProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const handelProductAdded = product => {
        let newCart = [];
        const isExit = cart.find(pd => pd._id === product._id)
        if (!isExit) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            isExit.quantity = isExit.quantity + 1;
            const remaining = cart.filter(pd => pd._id != product._id)
            newCart = [...remaining, isExit]
        }
        setCart(newCart)
        addToDb(product._id)
    }


    const handelClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const handelOneChange = (e) =>{
        seTotalPageNumber(parseInt(e.target.value))
        setCurrentPage(0)
    }
    return (
        <>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <ShowProduct
                            key={product._id}
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
                <div className='pageNation'>
                    {
                        pageNumbers.map(number => <button
                            className={currentPage === number ? 'selected':''} 
                            key={number}
                            onClick={()=>setCurrentPage(number)}
                            >{number}</button>)
                    }
                    <select value={totalPageNumber} onChange={handelOneChange} name="" id="">
                    {
                        options.map(option =>(
                            <option key={option} value={option}> {option}</option>
                        ))
                    }
                    </select>
                </div>
        </>
    );
};

export default Shop;