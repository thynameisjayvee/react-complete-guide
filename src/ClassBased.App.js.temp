import React, { Component } from "react";
import "./App.css";
import Person from "./Person";
import ClassBasedComponent from "./ClassBasedComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends Component {
  // state is a reserved word
  // only available on class-based component
  state = {
    persons: [
      {
        name: "Jayvee",
        age: 23,
      },
      {
        name: "Jv",
        age: 23,
      },
    ],
    otherState: "Some state",
  };

  nameHandler = () => {
    // console.log("click");
    // DONT DO THIS > this.state.persons[0].name = "JV";
    this.setState({
      persons: [
        {
          name: "Jv",
          age: 23,
        },
        {
          name: "Jayvee",
          age: 23,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, Welcome to React Complete Guide.</h1>
        <button onClick={this.nameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
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
