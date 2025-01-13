import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import StudentForm from "./components/StudentForm";

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
          <Route path="/add-student" element={<StudentForm/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;