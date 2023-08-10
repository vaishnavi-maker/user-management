import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import AddUserPage from './pages/addUserPage';
import Home from './component/home';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Home/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add User</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" element={<AddUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
