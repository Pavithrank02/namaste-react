import { useState } from "react";
import Logo from "../assets/image/foodvilla.png";
import { Link } from "react-router-dom";
import SignupForm from "./Login";
import useOnline from "../utils/useOnline";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);
export const LocateMe = () => {
	return (
		<div className="locate-me">
			<span className="_1tcx6 _34oCb">
				<span className="_3odgy">Shalimar Bag</span>
			</span>
			<span className="_3HusE">Mukherjee Nagar, Delhi, India</span>
			<span className="icon-downArrow kVKTT" />
			<div className="_21VC0 sPr5A" />
		</div>
	);
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    
    <div className="header">
      <Title />
      <LocateMe />
      <div className="nav-items">
        <ul>
        <Link to="/" className='text-link'>
          <li>
                Home
          </li>
          </Link>
          <Link to="/about" className='text-link'>
            <li>About</li>
          </Link>
          <Link to="/contact" className='text-link'>
            <li>Contact</li>
          </Link>
          <Link to="/cart" className='text-link'>
            <li>Cart</li>
          </Link>
          <Link to="/instamart" className='text-link'>
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 className='text-link'>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
       <Link to="/signUp" ><button onClick={() => setIsLoggedIn(false)} className='btn'>Logout</button> </Link> 
      ) : (
        <button onClick={() => setIsLoggedIn(true)}className='btn'>Login</button>
      )}
    </div>
  );
};

export default Header;