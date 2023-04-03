import { decrement, increment, reset } from "../constants/counterConsttant";

export const incrementCounter = () => {
  return {
    type: increment,
  };
};

export const decrementCounter = () => {
  return {
    type: decrement,
  };
};

export const resetCounter = () => {
  return {
    type: reset,
  };
};
