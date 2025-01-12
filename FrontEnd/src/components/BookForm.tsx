import React, { useState } from "react";
import axios from "axios";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState<number | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/books", { title, author, publishedYear })
      .then(() => alert("Book added successfully!"))
      .catch(() => {alert("Failed to add book!")});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Published Year"
        value={publishedYear}
        onChange={(e) => setPublishedYear(Number(e.target.value))}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
