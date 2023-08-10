import React from 'react';
import IndexPage from '../pages/indexPage';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className='navBar'>
          <Link 
            to="/add" 
            style={{
              margin: "1rem", 
              textDecoration: "none", 
              color: 'white'}}>
            Add User
          </Link>
        </nav>
        <IndexPage/>
    </div>
  );
}

export default Home;
