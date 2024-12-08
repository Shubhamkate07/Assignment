import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Signup/Signup.css';
const Signup = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
 
      const response = await axios.post('https://assignment-07.onrender.com/register', {
        username,
        email,
        password,
      });

      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Sign Up</button>
      </form>

      <Link to="/">
        <p className='para'>Login</p>
      </Link>
    </div>
  );
};

export default Signup;
