
// Fetching book data from an API and storing it in the state


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Header/Item.css';
 

// const Items = ({ book, books, setBooks }) => {

//   const [search,setsearch]=useState('');

//   const [updateDetails, setupdateDetails]=useState({
//     title:'',
//     description:''
//   });
//   console.log(updateDetails);
  
//   const navigate = useNavigate();
  

//   const handleClick = () => {
//     navigate(`/bookid/${book.id}`, { state: { books } });
//   };

 
//   const handleDelete = (e) => {
//     e.stopPropagation(); 
//     setBooks(books.filter((b) => b.id !== book.id));
//   };

//   return (
//     <>
//     <div className="item-card" onClick={handleClick}>
//       <img className="item-image" src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZXRzEBJHBDv1vNlkUO-yBvkBTXXYUE1K0ptQLvopWQFNn3W7F'} alt={book.title} />
//       <h3 className="item-title">{book.title}</h3>
//       <p className="item-author">{book.author}</p>
//       <p className="item-year">{book.publication_year}</p>
//       <p className="item-description">{book.description}</p>

//       <div className="item-actions">
//         <button className="delete-button" onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Items;

// Using dummy data from DummyData.js to populate the books list

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Header/Item.css';
// import {data} from '../DummyData/DummyData.js'; 

// const Items = () => {
//   const [books, setBooks] = useState(data); 
//   const [search, setSearch] = useState(''); 

//   const navigate = useNavigate();

//   const handleClick = (book) => {
//     navigate(`/bookid/${book.id}`, { state: { books } });
//   };

//   const handleDelete = (e, book) => {
//     e.stopPropagation(); 
//     setBooks(books.filter((b) => b.id !== book.id));
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="items-container">

//       <input
//         type="text"
//         placeholder="Search by title"
//         className="search-bar"
//         value={search}
//         onChange={handleSearch}/>

//       <div className="books-list">
//         {filteredBooks.map((book) => (
//           <div key={book.id} className="item-card" onClick={() => handleClick(book)}>
//             <img className="item-image" src={book.cover_image} alt={book.title} />
//             <h3 className="item-title">{book.title}</h3>
//             <p className="item-author">{book.author}</p>
//             <p className="item-year">{book.publication_year}</p>
//             <p className="item-description">{book.description}</p>

//             <div className="item-actions">
             
//               <button
//                 className="delete-button"
//                 onClick={(e) => handleDelete(e, book)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Items;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Header/Item.css';
import { data } from '../DummyData/DummyData.js';

const Items = () => {
  const [books, setBooks] = useState(data);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ id: '', title: '', author: '', cover_image: '', publication_year: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleClick = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    navigate(`/bookid/${id}`, { state: { book: selectedBook } }); 
  };
  

  const handleDelete = (e, bookId) => {
    e.stopPropagation();
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = { ...form, id: Date.now().toString()};
    setBooks([...books, newBook]);
    resetForm();
  };

  const handleUpdateBook = (e) => {
    e.preventDefault();
    setBooks(books.map((book) => (book.id === form.id ? form : book)));
    resetForm();
  };

  const handleEdit = (e, book) => {
    e.stopPropagation();
    setForm(book);
    setIsEditing(true);
  };

  const resetForm = () => {
    setForm({ id: '', title: '', author: '', cover_image: '', publication_year: '', description: '' });
    setIsEditing(false);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="items-container">
      <input
        type="text"
        placeholder="Search by title"
        className="search-bar"
        value={search}
        onChange={handleSearch}
      />

      <form className="add-form" onSubmit={isEditing ? handleUpdateBook : handleAddBook}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          name="cover_image"
          placeholder="Cover Image URL"
          value={form.cover_image}
          onChange={handleFormChange}
          required
        />
        <input
          type="number"
          name="publication_year"
          placeholder="Publication Year"
          value={form.publication_year}
          onChange={handleFormChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleFormChange}
          required
        />
        <button type="submit" className="add-button">
          {isEditing ? 'Update Book' : 'Add Book'}
        </button>
      </form>

      <div className="books-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="item-card" onClick={() => handleClick(book.id)}>
            <img className="item-image" src={book.cover_image} alt={book.title} />
            <h3 className="item-title">{book.title}</h3>
            <p className="item-author">{book.author}</p>
            <p className="item-year">{book.publication_year}</p>
            <p className="item-description">{book.description}</p>

            <div className="item-actions">
              <button className="edit-button" onClick={(e) => handleEdit(e, book)}>
                Edit
              </button>
              <button className="delete-button" onClick={(e) => handleDelete(e, book.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;

