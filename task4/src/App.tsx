import React, { useState, useRef } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  const countRef = useRef<Timer>(null);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return (
    <>
      <h2>Stopwatch</h2>
      <div>
        <h3 style={{color:"red"}}>{timer}</h3>
        <div>
          <button onClick={handleStart}>Start</button> &nbsp;
          <button onClick={handlePause}>Pause</button> &nbsp;
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;

type Timer = any;
