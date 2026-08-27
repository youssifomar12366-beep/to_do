import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"> PROJECT</div>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/todo">Todo</Link>
      </div>
    </nav>
  );
};

export default Navbar;