import React from 'react';
import '../Nav/Nav.css'; // Import CSS for styling

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <a href="/">
          <img
            src="https://plus.unsplash.com/premium_photo-1677187301660-5e557d9c0724?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            width="100px"
            height="50px"
            style={{ objectFit: 'cover', borderRadius: '19px', paddingLeft:'20px' }}
          />
        </a>
      </div>
      <div className="search-box">
        <ul className="nav-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/buybook">Buy Book</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
