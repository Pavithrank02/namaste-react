
import React from "react";
import ReactDOM from "react-dom/client";
const heading = (
  <h1>Food Villa</h1>
  )
const HeaderComponent = () => {
  return (
    <div className="header">
      {heading}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
     <div className="card">

     </div>
  )
}

const Body = () => {

}

const Footer = () => {

}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
