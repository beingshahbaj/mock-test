import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Fetchdata() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.data;
    setData(data);
  }

  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Fetch Data</NavLink>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
      <h1>Fetch Data From API</h1>
      <h1>hello world</h1>
      <h1>React Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        decrease
      </button>

      {data.length > 0 &&
        data.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default Fetchdata;
