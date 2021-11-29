import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
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

function UseReducer3() {
  const [count, dispatch] = useReducer(reducer, initialState); //Use Reducer 1
  const [count2, dispatch2] = useReducer(reducer, initialState); //Use Reducer 2

  return (
    <div>
      <h2>Use Reducer 1  {'>'} {count}</h2>
      <h2>Use Reducer 2  {'>'} {count2}</h2>
      <button
        onClick={() => dispatch({ type: "increment", value: 1 })}
        className="btn btn-primary"
      >
        Inc 1
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", value: 1 })}
        className="btn btn-primary"
      >
        Dec 1
      </button>
      <button
        onClick={() => dispatch2({ type: "increment", value: 5 })}
        className="btn btn-primary"
      >
        Inc 5
      </button>
      <button
        onClick={() => dispatch2({ type: "decrement", value: 5 })}
        className="btn btn-primary"
      >
        Dec 5
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-primary"
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducer3;
