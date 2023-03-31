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
      <h3>Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{timer}</p>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;

type Timer = any;
