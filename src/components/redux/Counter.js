import React from "react";
import { useSelector } from "react-redux";
const CounterCompo = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter INC and DEC</h1>
      <p>Counter Value is {counter}</p>
    </div>
  );
};

export default CounterCompo;
