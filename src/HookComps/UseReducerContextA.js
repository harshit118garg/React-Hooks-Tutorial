import React, { useContext } from "react";
import { ReducerCounterContext } from "./UseContextReducer";

function UseReducerContextA() {
  const rcCount = useContext(ReducerCounterContext);
  return (
    <div>
      <h2>Use Reducer Context A</h2>
      <h2>Count {rcCount.countState}</h2>
      <button
        onClick={() => rcCount.countDispatch("increment")}
        className="btn btn-primary"
      >
        Inc
      </button>
      <button
        onClick={() => rcCount.countDispatch("decrement")}
        className="btn btn-primary"
      >
        Dec
      </button>
      <button
        onClick={() => rcCount.countDispatch("reset")}
        className="btn btn-primary"
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducerContextA;
