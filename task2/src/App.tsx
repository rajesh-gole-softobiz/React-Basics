import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const handleFirstName = (e: any) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e: any) => {
    setLastName(e.target.value)
  }
  return (
    <div>
      First Name : <input onChange={handleFirstName} value={firstName}/>
      Last Name : <input onChange={handleLastName} value={lastName}/>
      <h1>Full Name : {`${firstName} ${lastName}`}</h1>
      <h2>Length : {`${firstName} ${lastName}`.replace(/ /g,"").length}</h2>
    </div>
  );
}

export default App;
