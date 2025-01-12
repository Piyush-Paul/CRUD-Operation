import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<BookList />} />
          <Route path="/add-book" element={<BookForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;