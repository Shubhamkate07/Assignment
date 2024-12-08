import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Signup/Signup.css';
const Signup = () => {
  // State to hold form input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to backend for registration
      const response = await axios.post('https://assignment-07.onrender.com/register', {
        username,
        email,
        password,
      });

      // Handle successful registration
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      // Handle error (e.g., user already exists or server error)
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>

      {/* Display success or error messages */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}

      {/* Signup Form */}
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
        <button type="submit">Sign Up</button>
      </form>

      <Link to="/">
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Signup;
