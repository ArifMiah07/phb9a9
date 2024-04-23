import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import { BannerProvider } from './Contexts/BannerContext'
import { ApartmentProvider } from './Contexts/ApartmentContext'
import AuthProvider from './Contexts/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BannerProvider>
        <ApartmentProvider>
            <HelmetProvider>
              <RouterProvider router={router}>      
              </RouterProvider>
            </HelmetProvider>
          </ApartmentProvider>
        </BannerProvider>
    </AuthProvider>
  </React.StrictMode>,
)