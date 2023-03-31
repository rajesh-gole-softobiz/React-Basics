import React, { useCallback, useState } from 'react';
import Message from './components/Message';

function App() {
  const [count,setCount] = useState(0)
  const [toggle,setToggle] = useState(false);

  const handleCount = () => {
    setCount(count+1)
  }

  const handleIncrementMsg = useCallback(() => {
    setCount(count+1)
  },[count])

  console.log("App rendering")
  return (
    <>
    {toggle ? 'On' : 'Off'} <br/>
    <button onClick={()=> setToggle(!toggle)}>Button</button>
    <h1>Count : {count}</h1>
    <button onClick={handleCount}>Increment</button> <br/><br/>
    <Message countNo={count} onHandleInc={handleIncrementMsg}/>
    </>
  );
}

export default App;
