import React, { useEffect, useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  const [loading,setIsLoading] = useState(false)

  useEffect(()=>{
    console.log("useEffect");
  },[count])

  const handleIncrement = () =>{
    setCount(count+1)
  }
  const date = new Date()
  return (
    <>
    {console.log("rendering")}

    <h1>Count: {count}</h1>
    <button onClick={handleIncrement}>Increment</button> &nbsp;
    <button onClick={()=>{setIsLoading(!loading)}}>Loading</button>
    <h4>Date : {date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</h4>
    <h3>Time : {date.toLocaleTimeString()}</h3>
    </>
  );
}

export default App;
