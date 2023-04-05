import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/configureStore";
import { setUser } from "../../redux/modules/auth";

const DashboardHeader = () => {
  const header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(setUser(null));
  };
  return (
    <div style={header}>
      <h2>Dashboard Header</h2>
      <div>
        <Link to="/">Home</Link> &nbsp;&nbsp;
        <span onClick={handleLogout}>Logout</span> &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default DashboardHeader;
