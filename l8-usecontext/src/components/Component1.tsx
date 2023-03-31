import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from '../context/UserContext'

const Component1 = () => {
    const [user,setUser] = useState({
        id:764,
        name: "Rajesh Gole"
    })
  return (
    <div>
        <UserContext.Provider value={user}>
        <Component2/>
        </UserContext.Provider>
    </div>
  )
}

export default Component1