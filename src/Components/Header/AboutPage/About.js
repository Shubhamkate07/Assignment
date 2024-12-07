import React from 'react';
import '../AboutPage/About.css'; // Add styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to the Book Inventory Management System</h1>
        <p>Your go-to platform for managing your book inventory with ease.</p>
      </header>

      <section className="about-section">
        <h2>Overview</h2>
        <p>
          This Book Inventory Management System helps you keep track of your book collection efficiently. You can add new books, edit details, and remove them as needed. It's designed to simplify your book management process.
        </p>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>Manage Book Inventory: Add, update, and delete books in your collection.</li>
          <li>Track Availability: Check available stock in real time.</li>
          <li>Search Functionality: Easily search for books by title, author, or genre.</li>
          <li>Admin Access: Special login for admins to manage all aspects of the inventory.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Getting Started</h2>
        <p>
          To get started, simply sign up for an account. Once logged in, you can begin adding books to your inventory, edit existing book details, and delete books you no longer need.
        </p>
      </section>

      <section className="about-section">
        <h2>Contact</h2>
        <p>If you have any questions or need support, feel free to <a href="/contact">contact us</a>.</p>
      </section>
    </div>
  );
};

export default About;
