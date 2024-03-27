import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="home-header">
    <h2>PCapid3v Blog</h2>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <p>awesome place to share your ideas </p>
    <Link className="create-blog-button" to="/Admin">
      Create Blog
    </Link>
  </header>
);

export default Header;
