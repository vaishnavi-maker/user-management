import React, { createContext, useCallback, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = useCallback((user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  },[users]);

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
