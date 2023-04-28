import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../Auth/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthProviderContext)
    const handelLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div >
                <Link to="/">Shop</Link>
                <Link to="/oders">Oders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='welcome'>Welcome {user.email} <button className='signOut-btn' onClick={handelLogOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;