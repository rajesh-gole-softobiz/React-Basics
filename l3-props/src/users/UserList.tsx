import React from 'react'
import { IUser } from '../interfaces/users'
import UserListItem from './UserListItem'

const UserList = (props : propTypes) => {
    const { users } = props
  return (
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Desc</th>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return (<UserListItem key={user.id} user={user} />)
                })
            }
        </tbody>
    </table>
  )
}

export default UserList

interface propTypes {
    users : IUser[]
}