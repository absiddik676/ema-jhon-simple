import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../Auth/AuthProvider';
const Login = () => {
    const {logIn} = useContext(AuthProviderContext)

    const handelLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email,password)
        .then(result  =>{
            console.log(result.user);
            e.target.reset()
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelLogin}>
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