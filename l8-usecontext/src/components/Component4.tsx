import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Component4 = () => {
  const user:any = useContext(UserContext)
  return (
    <>
    <h2>{user.id}</h2>
    <h2>{user.name}</h2>
    </>
  )
}

export default Component4