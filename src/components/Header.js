import { useState, useContext } from "react";
import Logo from "../assets/image/foodvilla.png";
import { Link } from "react-router-dom";
import SignupForm from "./Login";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="h-28 px-2" alt="logo" src={Logo} />
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
  const { user } = useContext(UserContext);
  return (
    
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <LocateMe />
      <div className="nav-items">
        <ul className="flex py-10">
        <Link to="/" className='text-link'>
          <li className=" px-2">
                Home
          </li>
          </Link>
          <Link to="/about" className='text-link'>
            <li className=" px-2">About</li>
          </Link>
          <Link to="/contact" className='text-link'>
            <li className=" px-2">Contact</li>
          </Link>
          <Link to="/cart" className='text-link'>
            <li className=" px-2">Cart</li>
          </Link>
          <Link to="/instamart" className='text-link'>
            <li className=" px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 className='text-link'>{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
       <Link to="/signUp" ><button onClick={() => setIsLoggedIn(false)} className='btn'>Logout</button> </Link> 
      ) : (
        <button onClick={() => setIsLoggedIn(true)}className='btn'>Login</button>
      )}
    </div>
  );
};

export default Header;