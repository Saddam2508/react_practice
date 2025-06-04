import React from "react";
import "./App.css";

import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UsersProvider from "./context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <NewUser />
      <Users />
    </UsersProvider>
  );
}

export default App;
