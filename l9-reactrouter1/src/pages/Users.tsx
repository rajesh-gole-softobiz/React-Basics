import React from 'react'
import { Link } from 'react-router-dom'
import { USERS } from '../constants/common'
import { UserList } from '../users'

const Users = () => {
  return (
        <>
        <Link to="add">Add User</Link>
        <UserList users={USERS}/>
        </>    
  )
}

export default Users