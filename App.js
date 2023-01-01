
import React from "react";
import ReactDOM from "react-dom/client";
const heading = (
  <h1>Namaste</h1>
  )
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React Functional Components</h1>
      <h2>Namaste h2</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
