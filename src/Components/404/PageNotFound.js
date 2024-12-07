import React from 'react';

import '../404/PageNotFound.css'; // Optional: for additional styling
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
