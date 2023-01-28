import about from "../assets/image/image 2.jpg";
import Profile from "./ProfileClass";
import ProfileFunctionalComponet from "./Profile";
import { Outlet } from "react-router-dom";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <Profile />
      </div>
    );
  }
}

export default About