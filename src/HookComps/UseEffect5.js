import React, { useState, useEffect } from "react";

function UseEffect5() {
  const [count, setCount] = useState(0);
  const tick = () => {
    console.log(`count updated`);
    setCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h2>{count}</h2>
    </>
  );
}

export default UseEffect5;
