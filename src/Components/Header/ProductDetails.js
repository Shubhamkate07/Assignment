import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../Header/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="product-details">
      <img src={book.cover_image} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year of Publication:</strong> {book.publication_year}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
};

export default ProductDetails;
