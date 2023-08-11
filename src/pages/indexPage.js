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

  const filteredUsersLength = filteredUsers.length;
  
  return (
    <div className="container">
      <UserFilter filterValue={filterValue} setFilterValue={setFilterValue} />
        <div className="card-container">
        {
          filteredUsersLength ?
           <>{filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}</>
          :<h1>No Data Found</h1>
        } 
        </div>
    </div>
  );
}

export default IndexPage;
