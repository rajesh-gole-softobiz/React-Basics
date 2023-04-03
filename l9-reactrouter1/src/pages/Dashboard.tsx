import React from 'react'
import { Outlet } from 'react-router'
import DashboardHeader from '../components/layout/DashboardHeader'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { USERS } from '../constants/common'
import UserList from '../users/UserList'

const Dashboard = () => {
  return (
    <div>
    <DashboardHeader/>
    {/* <Header/> */}
        <Outlet/>
    <Footer/>
    {/* <UserList users={USERS}/> */}
    </div>
    
  )
}

export default Dashboard