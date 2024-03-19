import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="home-header">
    <h2>PCapid3v Blog</h2>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <p>awesome place to share your ideas </p>
    <Link className="login-button" to="/login">
      Login
    </Link>
  </header>
);

export default Header;
