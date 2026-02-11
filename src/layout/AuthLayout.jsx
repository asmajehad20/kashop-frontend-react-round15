import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar'

export default function AuthLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
