import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setContact([...contact, { name, number }]);

    setName("");
    setNumber("");
    console.log(contact);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Name"
        />
        <br />
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          value={number}
          placeholder="number"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {contact.length > 0
          ? contact.map((con, index) => (
              <li key={index}>
                {con.name}: {con.number}
              </li>
            ))
          : null}
      </div>
    </div>
  );
}

export default Contact;
