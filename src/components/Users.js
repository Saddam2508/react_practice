import React from "react";
import User from "./User";
import { useUsersContext } from "../hooks/useUsersContext";

const Users = ({ handleDeleteUser }) => {
  const { users } = useUsersContext();
  return (
    <section>
      {users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </section>
  );
};

export default Users;
