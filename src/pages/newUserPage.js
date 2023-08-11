import React, { useState, useContext } from 'react';
import {UserContext} from '../UserContext';
import { useNavigate } from 'react-router-dom';

function AddUserPage() {
  const { addUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name!=="" && email!==""){
        const newUser = { id: Math.random()*10, name, email };
        addUser(newUser);
        navigate('/');
    }
    else{
      alert("Please Enter All the Values");
    }
  };

  const onClose = () => {
      navigate('/');
  };

  return (
    <div className='dialog-container'>
      <div className='dialog-box'>
        <h1>New User</h1>
        <form>
            <input 
              className='form-input' 
              type="text" value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Enter Your Name'/>
            <br/>
            <input 
              className='form-input' 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Enter Your Email Address'/>
            <br/>
            <button className='submit-btn' onClick={handleSubmit} type="submit">Add User</button>
            <button onClick={onClose} type="submit">Close</button>
        </form>
      </div>
    </div>
  );
}

export default AddUserPage;
