/* eslint-disable no-unused-vars */
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen mx-auto container'>
        <Header />
        <Outlet />
      </main>
      <div className='text-center p-8 mt-10 bg-gray-800'>Made with 💗 By Garv Agarwal</div>
    </div>
  )
}

export default AppLayout