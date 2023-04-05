import React from "react";
import { Outlet } from "react-router";
import DashboardHeader from "../components/layout/DashboardHeader";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import UserAuthHOC from "../components/UserAuthHOC";
import { USERS } from "../constants/common";
import UserList from "../users/UserList";

const Dashboard = () => {
  return (
    <UserAuthHOC>
      <DashboardHeader />
      {/* <Header/> */}
      <Outlet />
      <Footer />
      {/* <UserList users={USERS}/> */}
    </UserAuthHOC>
  );
};

export default Dashboard;
