import React, { useState } from 'react';
import axios from 'axios';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navi=useNavigate();
  // State to hold the form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to backend
      const response = await axios.post('https://assignment-07.onrender.com/signin', {
        email,
        password,
      });

      if(response.data.message==='Login successful'){
         alert("Login successful");
         navi('/item')
      }
      // Handle successful login


      setError('');
    } catch (err) {
      // Handle error (invalid credentials or server error)
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Display success or error messages */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>

      <Link to="/signup">
        <p>Signup</p>
      </Link>
    </div>
  );
};

export default Login;
