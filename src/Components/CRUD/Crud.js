import React, { useState } from "react";

const Crud = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = () => {
    if (!newBook.title || !newBook.author) {
      alert("Please provide book title and author");
      return;
    }
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  const editBook = (index) => {
    setEditIndex(index);
    setNewBook(books[index]);
  };

  const updateBook = () => {
    const updatedBooks = [...books];
    updatedBooks[editIndex] = newBook;
    setBooks(updatedBooks);
    setEditIndex(null);
    setNewBook({ title: "", author: "" });
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Manager</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        {editIndex !== null ? (
          <button onClick={updateBook} style={{ padding: "5px 10px" }}>
            Update Book
          </button>
        ) : (
          <button onClick={addBook} style={{ padding: "5px 10px" }}>
            Add Book
          </button>
        )}
      </div>
      <div>
        <h2>Book List</h2>
        {books.length > 0 ? (
          <ul>
            {books.map((book, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <strong>{book.title}</strong> by {book.author}
                <button
                  onClick={() => editBook(index)}
                  style={{ marginLeft: "10px", padding: "3px 5px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBook(index)}
                  style={{ marginLeft: "5px", padding: "3px 5px" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Crud;
