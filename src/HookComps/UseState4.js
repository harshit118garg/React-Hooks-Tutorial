import React, { useState } from "react";

function UseState4() {
  const [items, setItems] = useState([]);

  const addItem = () => {
      setItems([...items, {
          id : items.length,
          value : Math.floor(Math.random() * 10) + 1
      }])
  }

  return <>
        <button className="btn btn-primary" onClick={addItem}>Add a number</button>
      <ul className="list-group">
          {items.map(item => (
              <li key={item.id} className="list-group-item">{item.value}</li>
          ))}
      </ul>
  </>;
}

export default UseState4;
