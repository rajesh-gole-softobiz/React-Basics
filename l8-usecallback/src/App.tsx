import React, { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)

  const handleCount = () => {
    setCount(count+1)
  }

  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handleCount}>Increment</button>
    </>
  );
}

export default App;
