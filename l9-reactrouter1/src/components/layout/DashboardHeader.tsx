import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHeader = () => {
    const header = { 
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
     }
  return (
    <div style={header}>
      <h2>Dashboard Header</h2>
      <div>
        <Link to="/">Home</Link> &nbsp;
      </div>
    </div>
  )
}

export default DashboardHeader