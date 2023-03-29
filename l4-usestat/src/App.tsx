import React, { useState } from 'react';
import CountJSX from './components/CountJSX';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if(count<10){
      setCount(count+1)
    }
  }
  const decrement = () =>{
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <div>
      {/* <h1>{`Count = ${count}`}</h1> */}
      <CountJSX countno={count}/>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
