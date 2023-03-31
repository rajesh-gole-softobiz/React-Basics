import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home