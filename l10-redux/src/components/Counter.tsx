import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../redux/actions/counterActions";

const Counter = () => {
  // WITHOUT REDUX
  //   const [count, setCount] = useState(0);
  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };

  // WITH REDUX
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button> &nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button> &nbsp;&nbsp;
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
