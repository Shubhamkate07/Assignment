import React, { useState, useEffect } from "react";
import Items from "./Items";
import '../Header/Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [Data, setData]=useState([]);
  const [search,setsearch]=useState('');
  

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
  const value=e.target.value.toLowerCase();
  setsearch(value);
  

  const searchedData = Data.filter((book) =>
    book.title.toLowerCase().includes(value)
)
setBooks(searchedData);
;
 
};

  return (
    <div style={{ padding: "20px" }}>
      <input type='text' value={search} placeholder="search book here.." onChange={changeHandler} className="text1"/>
    
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "center",
          justifyContent: "center",
          marginTop:'20px'
        }}
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <Items key={index} book={book} books={books} setBooks={setBooks} />
          ))
        ) : (
          <p>No books available</p> 
        )}
      </div>
    
    </div>
  );
};

export default Home;
