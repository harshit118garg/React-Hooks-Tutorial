import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 100,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment100":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement100":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>
        {count.firstCount} -- {count.secondCount}
      </h2>
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
        onClick={() => dispatch({ type: "increment", value: 5 })}
        className="btn btn-primary"
      >
        Inc 5
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", value: 5 })}
        className="btn btn-primary"
      >
        Dec 5
      </button>
      <button
        onClick={() => dispatch({ type: "increment100", value: 100 })}
        className="btn btn-primary"
      >
        Inc 100
      </button>
      <button
        onClick={() => dispatch({ type: "decrement100", value: 100 })}
        className="btn btn-primary"
      >
        Dec 100
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

export default UseReducer2;
