import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/configureStore";
import { decrement, increment } from "../redux/modules/auth";

export function Counter1() {
  const count = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
