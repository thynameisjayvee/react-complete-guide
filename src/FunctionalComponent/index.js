import React from "react";

const FunctionalComponent = (props) => {
  return (
    <div className="card mx-auto">
      <p>I'm a functional component</p>
      <p>Made by: {props.author}</p>
    </div>
  );
};

export default FunctionalComponent;
