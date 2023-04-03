import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
