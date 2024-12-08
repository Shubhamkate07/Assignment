import React, { useState } from 'react';
import axios from 'axios';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navi=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
    
      const response = await axios.post('https://assignment-07.onrender.com/signin', {
        email,
        password,
      });

      if(response.data.message==='Login successful'){
         alert("Login successful");
         navi('/item')
      }
   


      setError('');
    } catch (err) {
 
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}


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
        <button type="submit" style={{marginTop:'18px'}}>Login</button>
      </form>

      <Link to="/signup" >
        <p className='para'>Signup</p>
      </Link>
    </div>
  );
};

export default Login;
