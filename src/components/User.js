import React from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { id, username } = user;
  const { users, setUsers } = useUsersContext();
  const handleDelete = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };
  return (
    <article>
      <h1>{id}</h1>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
