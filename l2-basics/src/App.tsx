import React, { Fragment } from 'react';

const borderStyle = {
  border : "1px solid",
  backgroundColor: "black",
  color: "white"
}

function App() {
  const users = [
    {
      id:1,
      name:"Rajesh Gole"
    },
    {
      id:2,
      name:"Amisha Sharma"
    }
  ]

  // const usersJSX = users.map((user)=>{
  //   return (
  //   <div id={`user-block-${user.id}`} key={user.id}>
  //     <h1>{user.name}</h1>
  //   </div>
  // )})
  const usersJSX = users.map((user)=>{
    return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
    </tr>
  )})
  return (
    <Fragment>
      <table style={borderStyle}>
        <thead>
            <th>Id</th>
            <th>Name</th>
        </thead>
        <tbody>
            { usersJSX }
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
