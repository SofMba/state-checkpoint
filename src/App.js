import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person:{
      name: "Sofiene mbarek",
    bio: " 19 years old",
    prfession: "frond-end software devlopper"
    },
     maried: true,
     time : 0
  };


  handleshow = () => {
    this.setState({maried: false})
  }
  handleshowTwo = () => {
    this.setState({maried: true})
  
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({time: this.state.time +1})
    }, 1000);

  }

  render() {
    return (
      <div>
      {this.state.maried ?
      <div>
      <h1>welcome </h1>
        <h1>The name : {this.state.person.name}</h1>
        <h1>The profession : {this.state.person.prfession}</h1>
        <h1>The age : {this.state.person.bio}</h1>
        <button type="button" onClick={this.handleshow}>click me !!</button>
      </div>
      :
      <div>
      <h1>welcome </h1>
      <button type="button" onClick={this.handleshowTwo}>click me !!</button>
      </div>
      }
      <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default App;
