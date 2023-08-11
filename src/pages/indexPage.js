import React, { useState, useContext } from 'react';
import UserCard from '../components/userCard';
import UserFilter from '../components/userFilter';
import {UserContext} from '../UserContext';

function IndexPage() {
  const { users } = useContext(UserContext);
  const [filterValue, setFilterValue] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="container">
      <UserFilter filterValue={filterValue} setFilterValue={setFilterValue} />
      <div className="card-container">
        {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default IndexPage;
