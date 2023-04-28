import React, { useContext } from 'react';
import { AuthProviderContext } from '../components/Auth/AuthProvider';
import { Navigate,useLocation } from "react-router-dom";
import './PrivateRout.css'
const PrivateRout = ({ children}) => {
    const {user,loading} = useContext(AuthProviderContext)
    const location = useLocation();
    if(loading){
        return <div className='spnier'><span class="loader"></span></div>
    }
    if(user){
        return children

    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRout;