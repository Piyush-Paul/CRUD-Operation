import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/add-book">Add Book</Link>
          <Link to="/add-student">Add Student</Link>
          <Link to="/issued-book">Issued Book</Link>
          <span>Welcome, {user}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
