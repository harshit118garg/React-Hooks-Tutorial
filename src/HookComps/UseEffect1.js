import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  },[]);

  return (
    <>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Click {count} times
      </button>
    </>
  );
}

export default UseEffect1;