import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ data });
    setData("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>{" "}
      <br />
      <h1>{search}</h1>
    </div>
  );
};

export default Contact;
