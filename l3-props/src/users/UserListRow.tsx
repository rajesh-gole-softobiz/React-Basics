import React from 'react'

const UserListRow = (props : propsType) => {
    const {value} = props
  return (
    <td>{value}</td>
  )
}

export default UserListRow

interface propsType {
    value : any
}

