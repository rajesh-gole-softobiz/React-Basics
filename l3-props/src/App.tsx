import React from 'react';
import { USERS } from './constants/common';
import { UserList } from './users';

function App() {
  return (
    <div className="App">
      {
        <UserList users={USERS}/>
      }
    </div>
  );
}

export default App;
