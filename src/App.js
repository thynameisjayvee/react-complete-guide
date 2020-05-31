import React, { Component } from "react";
import "./App.css";
import Person from "./Person";
import ClassBasedComponent from "./ClassBasedComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Welcome to React Complete Guide.</h1>
        <Person name="Jayvee" age="23" />
        <Person name="Jv" age="23">
          Hobbies: Gaming
        </Person>
        <ClassBasedComponent author="Jayvee" />
        <FunctionalComponent author="Jayvee" />
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
