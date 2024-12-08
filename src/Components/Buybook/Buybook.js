import React from 'react';
import '../Buybook/Buybook.css'; 

const Buybook = () => {
  return (
    <div className="buybook-container">
      <h1>Buy Your Favorite Book</h1>
      <p>Browse through our collection and choose your favorite book.</p>

      <div className="book-list">
        <div className="book-item">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZXRzEBJHBDv1vNlkUO-yBvkBTXXYUE1K0ptQLvopWQFNn3W7F"
            alt="Book Cover"
            className="book-image"
            style={{objectFit:'cover'}}
          />
          <h3>To Kill a Mockingbird</h3>
          <p>Author: Harper Lee</p>
          <p>Price: $19.99</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="book-item">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg"
            alt="Book Cover"
            className="book-image"
          />
          <h3>The Lord of the Rings</h3>
          <p>Author: J.R.R. Tolkien</p>
          <p>Price: $15.99</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Buybook;
