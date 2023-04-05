import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import UserAuthHOC from "../components/UserAuthHOC";

const Home = () => {
  return (
    <UserAuthHOC>
      <Header />
      <Outlet />
      <Footer />
    </UserAuthHOC>
  );
};

export default Home;
