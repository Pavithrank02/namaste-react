import React from "react"

class Profile extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      userInfo: {
        name: "pavi",
        age: 25
      }

      

    }
    

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

    return (
      <div>
        <h1>{this.state.userInfo.name}</h1>
        <h1>{this.state.userInfo.age}</h1>
        <button onClick={this.changeAge}>change</button>
      </div>
    )
  }

}

export default Profile