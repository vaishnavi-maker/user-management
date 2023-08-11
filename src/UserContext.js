import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    console.log(user);
  }

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
