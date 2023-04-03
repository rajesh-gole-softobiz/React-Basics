import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import { Counter1 } from "./components/Counter1";
import Stopwatch from "./components/Stopwatch";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserAdd from "./pages/users/UserAdd";
import UserEdit from "./pages/users/UserEdit";
import UserView from "./pages/users/UserView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Counter1 />} />
        {/* <Route path='' element={<Counter/>}/> */}
        <Route path="stopwatch" element={<Stopwatch />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<Users />} />
        <Route path=":userId" element={<UserView />} />
        <Route path=":userId/edit" element={<UserEdit />} />
        <Route path="add" element={<UserAdd />} />
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
