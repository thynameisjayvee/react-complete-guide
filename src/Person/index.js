import React from "react";

const person = (props) => {
  const data = {
    staticText: "lorem ipsom dolor",
  };
  return (
    <div className="card mx-auto">
      <p>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <p>{data.staticText}</p>
    </div>
  );
};

export default person;
