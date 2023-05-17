import React, { useContext, useState } from 'react';
import './Login.css'
import { Link,useNavigate,useLocation  } from 'react-router-dom';
import { AuthProviderContext } from '../Auth/AuthProvider';
const Login = () => {
    const [show,setShow] = useState(false)
    const {logIn} = useContext(AuthProviderContext)
    const navigate = useNavigate()
    const location = useLocation();


    const from = location?.state?.from?.pathname || '/'

    const handelLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email,password)
        .then(result  =>{
            console.log(result.user);
            e.target.reset()
            navigate(from,{replace:true})
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
            <input type={show?'':'password'} placeholder='Password' name="password" id="" required />
            <p onClick={()=>setShow(!show)}><small>
                {show ? <span>Hid Password </span>: <span>Show password</span> }
                </small></p>
            <input className='btn-submit' type="submit" value="Login" />
            <p className='new-to-website'>New to Ema-john? <Link className='link' to='/signup'>Create New Account</Link></p>
            </form>
            
        </div>
    );
};

export default Login;