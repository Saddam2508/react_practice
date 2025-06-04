import React, { createContext, useState } from "react";
import { initialState } from "../reducer/usersReducer";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(initialState.users);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
