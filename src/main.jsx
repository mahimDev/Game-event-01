import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProveider from './Auth/AuthProveider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProveider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProveider>
  </React.StrictMode>,
)
