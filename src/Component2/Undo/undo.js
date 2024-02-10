import React from "react";
import { useState } from "react";

function Undo() {
  const [name, setName] = useState("");
  const [arr, setArr] = useState([]);

  function append() {
    if (name === "") return;
    setArr([...arr, { name, id: crypto.randomUUID() }]);
    setName("");
  }
  function undo() {
    if (arr.length === 0) return;
    setArr(arr.slice(0, -1));
  }

  return (
    <div>
      <h1>Undo</h1>

      <input
        type="text"
        placeholder="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={append}>add</button>
      <button onClick={undo}>undo</button>
      {arr.map((e, i) => (
        <div key={e.id}>
          <p>{e.name}</p>
          <button
            onClick={() => {
              for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === e.id) {
                  arr.splice(i, 1);
                }
              }
              return setArr([...arr]);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Undo;
