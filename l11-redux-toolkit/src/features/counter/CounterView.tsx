import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Increment</button> &nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button> &nbsp;&nbsp;
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default CounterView;
