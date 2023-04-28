import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthProviderContext =  createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        // stop observing 
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;