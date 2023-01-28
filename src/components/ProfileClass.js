import React from "react"

class Profile extends React.Component{
  
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Child - Constructor" + this.props.name);
  }
   changeAge = () => {
    console.log("userInfo")
    this.setState({
      userInfo:{
        name:"paithran",
        age:26
      }
    })
  }
  render() {
    const { count } = this.state;

    return (
      <div>
        <h1> Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    )
  }

}

export default Profile