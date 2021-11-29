import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
      break;
  }
};

function UseReducer1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("increment")} className="btn btn-primary">
        Inc
      </button>
      <button onClick={() => dispatch("decrement")} className="btn btn-primary">
        Dec
      </button>
      <button onClick={() => dispatch("reset")} className="btn btn-primary">
        Reset
      </button>
    </div>
  );
}

export default UseReducer1;
