import { useState } from "react";
import Logo from "../assets/image/foodvilla.png";
import { Link } from "react-router-dom";
import SignupForm from "./Login";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
       <Link to="/signUp"><button onClick={() => setIsLoggedIn(false)}>Logout</button> </Link> 
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;