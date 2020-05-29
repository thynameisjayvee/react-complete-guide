import React, { Component } from "react";
import "./App.css";
import Person from "./Person";
import ClassBasedComponent from "./ClassBasedComponent";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, Welcome to React Complete Guide.</h1>
    //     <Person />
    //     <SampleComponent />
    //   </div>
    // );

    return (
      <div className="App">
        <h1>Hi, Welcome to React Complete Guide.</h1>
        <Person />
        <ClassBasedComponent />
      </div>
    );

    // JSX way
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "JSX way")
    // );
  }
}

export default App;
