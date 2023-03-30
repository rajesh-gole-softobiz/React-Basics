import React, { useState } from 'react';
import Message from './components/Message';

function App() {
  const [count,setCount] = useState(0)

  console.log("App rendered");
  
  return (
    <>
     <h1>Count : {count}</h1>
     <button onClick={()=>{setCount((count)=>{return(count+1)})}}>Increment</button>
     <Message countNo={count}/>
    </>
  );
}

export default App;
