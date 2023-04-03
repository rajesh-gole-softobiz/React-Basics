import { useEffect, useState } from "react";
const StopWatch = () => {
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
  console.log("counter =>", counter);
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
export default StopWatch;
