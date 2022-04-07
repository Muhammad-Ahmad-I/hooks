import React, { useState } from "react";
import useInput from "./custom-hooks/customHooks";
import CounterCompo from "./redux/Counter";
const Home = () => {
  const [checkString, setCheckString] = useState("");

  var { validateName, checkStringStatus } = useInput();

  const NameHandler = (val) => {
    setCheckString(val);
  };
  const validationCheckHandler = () => {
    validateName(checkString);
  };
  return (
    <div>
      <h6>
        custome input Hook to check the validation that input have only char
        string
      </h6>
      <input onChange={(e) => NameHandler(e.target.value)} />
      <button onClick={() => validationCheckHandler()}>check</button>
      {checkStringStatus && <p>validate String</p>}
      {!checkStringStatus && <p>Invalid String</p>}
      <div>
        React Redux Counter
        <CounterCompo />
      </div>
    </div>
  );
};

export default Home;
