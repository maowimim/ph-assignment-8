import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
          <Outlet />
      </div>

      <Footer/>
     <ToastContainer/>
    </div>
  )
}

export default MainLayout

