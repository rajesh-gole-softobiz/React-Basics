import React, { useState } from 'react'
import Message from './components/Message';
import NameJSX from './components/NameJSX';

const App = () => {
  const [count, setCount] = useState(0)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age,setAge] = useState(0)
  const handleFirstName = (e: any) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e: any) => {
    setLastName(e.target.value)
  }
  const handleAge = (e: any) => {
    setAge(e.target.value)
  }
  const fullName =`${firstName.trim()}${lastName.trim()}`.toLowerCase();
  const nameLength = fullName.length;
  const cnt = fullName.split("").sort().filter((letter,index,self) => letter === self[0]).length;

  console.log("App rendering");
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={()=>{setCount((count)=>count+1)}}>Increment</button> <br/><br/>

      First Name : <input onChange={handleFirstName} value={firstName}/> &nbsp;
      Last Name : <input onChange={handleLastName} value={lastName}/> &nbsp;
      Age : <input onChange={handleAge} value={age} type="number"/> &nbsp;

      <h1>Full Name : {`${firstName} ${lastName}`}</h1>
      <NameJSX nameLen={`${firstName} ${lastName}`.replace(/ /g,"").length}/>
      {/* <h2>Length : {`${firstName} ${lastName}`.replace(/ /g,"").length}</h2> */}

    <Message noOfMsg={0}/>
    </>
  )
}

export default App