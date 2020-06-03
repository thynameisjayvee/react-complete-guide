import React, { useState } from "react";
import "./App.css";
import Person from "./Person";
import ClassBasedComponent from "./ClassBasedComponent";
import FunctionalComponent from "./FunctionalComponent";

const App = (props) => {
  const [personsState, setPersonState] = useState({
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
  });

  const [otherState, setOtherState] = useState({
    otherState: "Some state",
  });

  console.log(personsState, otherState);

  const nameHandler = () => {
    // console.log("click");
    // DONT DO THIS > this.state.persons[0].name = "JV";
    setPersonState({
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

    setOtherState({
      otherState: "Some new state",
    });
  };

  return (
    <div className="App">
      <h1>Hi, Welcome to React Complete Guide.</h1>
      <button onClick={nameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
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
};

export default App;
