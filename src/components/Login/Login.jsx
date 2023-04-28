import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form >
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' name="email" id="" required />
            <label htmlFor="email">Password</label>
            <input type="password" placeholder='Password' name="password" id="" required />
            <input className='btn-submit' type="submit" value="Login" />
            <p className='new-to-website'>New to Ema-john? <Link className='link' to='/signup'>Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;