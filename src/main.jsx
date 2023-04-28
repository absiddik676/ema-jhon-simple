import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Layout from './components/Layout/Layout';
import Oders from './components/Oders/Oders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cardProductLoader from './Loders/CardProductLoder';
import ChackOut from './components/ChackOut/ChackOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Auth/AuthProvider';
import PrivateRout from './Routs/PrivateRout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: ([
      {
        path: '/',
        element: <Shop />
      },
      {
        path: 'oders',
        element: <Oders />,
        loader: cardProductLoader
      },
      {
        path: 'Inventory',
        element: <Inventory />
      },
      {
        path: 'chackOut',
        element: <PrivateRout><ChackOut /></PrivateRout>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
