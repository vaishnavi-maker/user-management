import React from 'react';

function Card({ user }) {
  return (
    <div className="cardcontainer">
      <h3 className="card-title">{user.name}</h3>
      <p className="card-content">Email: {user.email}</p>
    </div>
  );
}

export default Card;