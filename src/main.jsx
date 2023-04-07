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
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:([
      {
        path:'/',
        element:<Shop/>
      },
      {
        path:'oders',
        element:<Oders/>,
        loader:cardProductLoader
      },
      {
        path:'Inventory',
        element:<Inventory/>
      },
      {
        path:'login',
        element:<Login/>
      }
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
