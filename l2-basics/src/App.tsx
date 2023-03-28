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
  return (
    <Fragment>
      {
        users.map((user)=>(
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))
      }
    </Fragment>
  );
}

export default App;
