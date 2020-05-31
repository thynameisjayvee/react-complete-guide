import React, { Component } from "react";

class ClassBasedComponent extends Component {
  render() {
    return (
      <div className="card mx-auto">
        <p className="red--text">I'm a class-based component</p>
        <p>Made by: {this.props.author}</p>
      </div>
    );
  }
}

export default ClassBasedComponent;
