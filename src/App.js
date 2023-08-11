import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserPage from './pages/newUserPage';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" element={<AddUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
