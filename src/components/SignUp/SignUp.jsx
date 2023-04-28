import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [error,setError] = useState('')

    const handelSigUp = e =>{
        e.preventDefault();
        const email =  e.target.email.value;
        const password =  e.target.password.value;
        const conformPass  =  e.target.conform.value;
        console.log( email,password,conformPass);

        if(password !== conformPass){
            setError('Your Password did not match');
            return
        }
        else if(password.length < 6){
            setError('password must be 6 latter');
            return;
        }

    }
    console.log(error);

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelSigUp}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' name="email" id="" required />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Password' name="password" id="" required />
                <label htmlFor="conform">Conform Password</label>
                <input type="password" placeholder='Conform Password' name="conform" id="" required />
                <input className='btn-submit' type="submit" value="Sign Up" />
                <small className='new-to-website'>Already have an account?  <Link className='link' to='/login'>Login</Link></small>
                <p className='error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;