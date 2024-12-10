// import React, { useState, useEffect } from "react";
// import Items from "./Items";
// import '../Header/Home.css';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [Data, setData]=useState([]);
//   const [search,setsearch]=useState('');
  

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const url = await fetch(`https://www.freetestapi.com/api/v1/books?limit=50`);
//         const data = await url.json();
//         console.log("Fetched data:", data); 
//         setBooks(data); 
//         setData(data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     fetchBooks();
//   }, []);


  
// const changeHandler = (e) => {
//   const value=e.target.value.toLowerCase();
//   setsearch(value);
  

//   const searchedData = Data.filter((book) =>
//     book.title.toLowerCase().includes(value)
// )
// setBooks(searchedData);
// ;
 
// };

//   return (
//     <div style={{ padding: "20px" }}>
//       <input type='text' value={search} placeholder="search book here.." onChange={changeHandler} className="text1"/>
    
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           textAlign: "center",
//           justifyContent: "center",
//           marginTop:'20px'
//         }}
//       >
//         {books.length > 0 ? (
//           books.map((book, index) => (
//             <Items key={index} book={book} books={books} setBooks={setBooks} />
//           ))
//         ) : (
//           <p>No books available</p> 
//         )}
//       </div>
    
//     </div>
//   );
// };

// export default Home;







import React, { useState, useEffect } from "react";
import Items from "./Items";
import '../Header/Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = await fetch(`https://www.freetestapi.com/api/v1/books?limit=50`);
        const data = await url.json();
        console.log("Fetched data:", data);
        setBooks(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const changeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const searchedData = Data.filter((book) =>
      book.title.toLowerCase().includes(value)
    );
    setBooks(searchedData);
  };

const addBook = () => {
    if (!newBook.title || !newBook.author) {
      alert("Please provide book title and author");
      return;
    }
    setBooks([...books, newBook]);
    setData([...books, newBook]);
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
    setData(updatedBooks);
    setEditIndex(null);
    setNewBook({ title: "", author: "" });
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    setData(updatedBooks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={search}
        placeholder="Search book here.."
        onChange={changeHandler}
        className="text1"
      />
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <Items
              key={index}
              book={book}
              books={books}
              setBooks={setBooks}
              onEdit={() => editBook(index)}
              onDelete={() => deleteBook(index)}
            />
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
