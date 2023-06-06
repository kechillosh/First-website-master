import React, { useState } from 'react';
import '../styles/LoginPopup.css';
import { Link } from 'react-router-dom';
import { SlClose } from "react-icons/sl";

function LoginPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset username and password
    setUsername('');
    setPassword('');
    // Close the popup
    setIsOpen(false);
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className='dada'>
      <button className="login-button" onClick={togglePopup}>
        Log In
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button className="login-submit" onClick={handleRefresh}>
              Log In
            </button>
            
           
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPopup;