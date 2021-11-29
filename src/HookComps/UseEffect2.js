import React, { useState, useEffect } from "react";

function UseEffect2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`useEffect - updating document title`);
    document.title = `you clicked ${count} times`;
  },[count]);

  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control border border-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Click {count} times
      </button>
    </>
  );
}

export default UseEffect2;
