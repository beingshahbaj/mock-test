import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addbird } from "../Redux/BirdReducer";
import { undo } from "../Redux/BirdReducer";
function Bird() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) return;
    dispatch(addbird(name));
    setName("");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
        />
        <button type="submit">add bird</button>
        <button onClick={() => dispatch(undo())}>undo</button>
      </form>
    </div>
  );
}

export default Bird;
