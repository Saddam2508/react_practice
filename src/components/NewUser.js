import React, { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const { setUsers } = useUsersContext();
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUsername("");
  };
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
