import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../Header/ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();  // Get the 'id' parameter from the URL
  const location = useLocation();  // Get the location object from the router
  const { books } = location.state;  // Get the 'books' data from the state passed during navigation
  console.log(books);
  

  // Find the particular book based on the 'id'
  const particularBook = books.find((book) => book.id === parseInt(id));

  if (!particularBook) {
    return <div>Book not found</div>;
  }

  return (
    <div className="product-details">
      <img src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZXRzEBJHBDv1vNlkUO-yBvkBTXXYUE1K0ptQLvopWQFNn3W7F'} alt={particularBook.title} />
      <h3>{particularBook.title}</h3>
      <p><strong>Author:</strong> {particularBook.author}</p>
      <p><strong>Year of Publication:</strong> {particularBook.publication_year}</p>
      <p><strong>Description:</strong> {particularBook.description}</p>
    </div>
  );
};

export default ProductDetails;
