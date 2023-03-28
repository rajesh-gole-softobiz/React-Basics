import React, { Fragment } from 'react';

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

  const usersJSX = users.map((user)=>{
    return (
    <div id={`user-block-${user.id}`} key={user.id}>
      <h1>{user.name}</h1>
    </div>
  )})
  return (
    <Fragment>
      { usersJSX }
    </Fragment>
  );
}

export default App;
