import React, { useEffect, useState } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  totalQuantity : number ;
  availableQuantity : number ;
  publishedYear: number;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.publishedYear}) (Available Quentity : {book.availableQuantity} , Total Quantity : {book.totalQuantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;