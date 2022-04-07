import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  //these conditions are without payload.
  if (action.type === "ADD") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "SUBTRACT") {
    return {
      counter: state.counter - 1,
    };
  }
  //actions with payload
  if (action.type === "INCREMENT_BY_5") {
    return {
      counter: state.counter + action.amount,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
