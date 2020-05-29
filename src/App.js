import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Welcome to React Complete Guide.</h1>
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
