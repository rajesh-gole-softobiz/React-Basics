import React from 'react'
import { IUser } from '../interfaces/users'

const UserListItem = (props: propsType) => {
    const {user} = props;
  return (
    <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.desc}</td>
    </tr>
  )
}

export default UserListItem

interface propsType {
    user: IUser
}