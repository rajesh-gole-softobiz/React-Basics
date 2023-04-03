// import React, { useState, useRef } from "react";

// const App = () => {
//   const [timer, setTimer] = useState(0);
//   const countRef = useRef<Timer>(null);

//   const handleStart = () => {
//     countRef.current = setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//   };

//   const handlePause = () => {
//     clearInterval(countRef.current);
//   };

//   const handleReset = () => {
//     clearInterval(countRef.current);
//     setTimer(0);
//   };

//   return (
//     <>
//       <h2>Stopwatch</h2>
//       <div>
//         <h3 style={{color:"red"}}>{timer}</h3>
//         <div>
//           <button onClick={handleStart}>Start</button> &nbsp;
//           <button onClick={handlePause}>Pause</button> &nbsp;
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// type Timer = any;

import { useEffect, useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    if (isRunning) {
      setIsRunning(false);
    }
    setCounter(0);
  };
  useEffect(() => {
    let timeout: any;
    if (isRunning) {
      timeout = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [isRunning, counter]);
  return (
    <div>
      <h1>Stopwatch = {counter}</h1>
      <div>
        {!isRunning ? (
          <button disabled={isRunning} onClick={handleStart}>
            Start
          </button>
        ) : (
          <button disabled={!isRunning} onClick={handleStop}>
            Stop
          </button>
        )}{" "}
        &nbsp;&nbsp;
        <button disabled={counter === 0} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default App;
