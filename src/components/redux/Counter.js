import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const CounterCompo = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const IncrementHandler = () => {
    dispatch({
      type: "ADD",
    });
  };
  const DecrementHandler = () => {
    dispatch({
      type: "SUBTRACT",
    });
  };
  const IncrementBy5 = () => {
    dispatch({
      type: "INCREMENT_BY_5",
      amount: 5,
    });
  };

  return (
    <div>
      <h1>Counter INC and DEC</h1>
      <p>Counter Value is {counter}</p>
      <button onClick={() => IncrementHandler()}>Increment</button>
      <button onClick={() => DecrementHandler()}>Decrement</button>
      <button onClick={() => IncrementBy5()}>Increment of 5</button>
      <br />
    </div>
  );
};

export default CounterCompo;
