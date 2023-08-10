import React, { useState, useContext, useCallback, useMemo } from 'react';
import UserCard from '../components/userCard';
import UserFilter from '../components/userFilter';
import {UserContext} from '../UserContext';

function IndexPage() {
  // Assume a UserContext for managing users
  const { users } = useContext(UserContext);

  const [filterValue, setFilterValue] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="container">
      <UserFilter filterValue={filterValue} setFilterValue={setFilterValue} />
      <div className="user-list article-container">
        {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default IndexPage;
