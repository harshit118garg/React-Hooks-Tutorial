import React, { useReducer } from "react";
/* Child Components */
import UseReducerContextA from "./UseReducerContextA";
import UseReducerContextB from "./UseReducerContextB";
import UseReducerContextC from "./UseReducerContextC";
/* Use Context */
export const ReducerCounterContext = React.createContext();
/* Use Redducer Counter */
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment": 
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseContextReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <ReducerCounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
      {/* <h2>Count {count}</h2> */}
        <UseReducerContextA />
        <UseReducerContextB />
        <UseReducerContextC />
      </div>
    </ReducerCounterContext.Provider>
  );
}

export default UseContextReducer;
