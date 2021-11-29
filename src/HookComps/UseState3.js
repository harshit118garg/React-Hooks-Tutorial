import React, { useState } from "react";

function UseState3() {
  const [name, setName] = useState({
    fName: "",
    lName: "",
    age: "",
  });

  return (
    <>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={name.fName}
            onChange={(e) => setName({ ...name, fName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={name.lName}
            onChange={(e) => setName({ ...name, lName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            name="age"
            value={name.age}
            onChange={(e) => setName({ ...name, age: e.target.value })}
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
        <h2>First Name is == {name.fName}</h2>
        <h2>Last Name is == {name.lName}</h2>
        <h2>Age is == {name.age}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </>
  );
}

export default UseState3;
