import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Searchfilter() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const fetchdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.data;

    setData(data);
  };

  console.log(data);

  useEffect(() => {
    fetchdata();
  }, []);

  const handlechange = (e) => {
    // setData(data.filter((item)=> item.titel.toLowerCase().include(name)))
    setData(
      data.filter((item) => item.title.toLowerCase().includes(e.target.value))
    );
  };

  return (
    <div className="list">
      <input onChange={handlechange} type="text" placeholder="name" />
      {data.length > 0 &&
        data.map((item) => (
          <div>
            <h4>{item.title}</h4>
          </div>
        ))}
    </div>
  );
}

export default Searchfilter;
