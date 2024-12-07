// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Header/Item.css'; // Import the CSS file for styling

// const Items = (props) => {
//   const navigate = useNavigate(); // Initialize navigate function
//   const { book, books, setBooks } = props;

//   // Handle navigation to the book details page
//   const handleClick = () => {
//     navigate(`/bookid/${book.id}`, { state: { books: books } });
//   };



//   const handleUpdate = () => {
//     const updatedBook = { ...book, title: 'Updated Title', description: 'Updated Description' };
    
//     // Update the books array with the updated book
//     const updatedBooks = books.map((b) =>
//       b.id === book.id ? updatedBook : b
//     );
//     setBooks(updatedBooks);
//   };

//   const handleDelete = () => {
//     const updatedBooks = books.filter((b) => b.id !== book.id);
//     setBooks(updatedBooks);
//   };




//   return (
//     <div className="item-card" onClick={handleClick} >
//       <img className="item-image" src={book.cover_image} alt={book.title} />
//       <h3 className="item-title">{book.title}</h3>
//       <p className="item-author">{book.author}</p>
//       <p className="item-year">{book.publication_year}</p>
//       <p className="item-description">{book.description}</p>

//       <div className="item-actions">
//         <button className="update-button" onClick={handleUpdate}>Update</button>
//         <button className="delete-button" onClick={handleDelete}>Delete</button>
//       </div>
     
//     </div>
//   );
// };

// export default Items;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Header/Item.css'; // Import the CSS file for styling

const Items = ({ book, books, setBooks }) => {

  const [search,setsearch]=useState('');

  const [updateDetails, setupdateDetails]=useState({
    title:'',
    description:''
  });
  console.log(updateDetails);
  
  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate(`/bookid/${book.id}`, { state: { books } });
  };

  const handleUpdate = (e) => {
    e.stopPropagation(); // Prevent navigation
    const updatedBook = { ...book, title: 'Updated Title', description: 'Updated Description' };
    setBooks(books.map((b) => (b.id === book.id ? updatedBook : b)));
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent navigation
    setBooks(books.filter((b) => b.id !== book.id));
  };

  return (
    <>
    <div className="item-card" onClick={handleClick}>
      <img className="item-image" src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZXRzEBJHBDv1vNlkUO-yBvkBTXXYUE1K0ptQLvopWQFNn3W7F'} alt={book.title} />
      <h3 className="item-title">{book.title}</h3>
      <p className="item-author">{book.author}</p>
      <p className="item-year">{book.publication_year}</p>
      <p className="item-description">{book.description}</p>

      <div className="item-actions">
        <button className="update-button" onClick={handleUpdate}>Update</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
    </>
  );
};

export default Items;

