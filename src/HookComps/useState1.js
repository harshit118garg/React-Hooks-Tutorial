import React, { useState } from "react";

function useState1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count {count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </>
  );
}

export default useState1;
