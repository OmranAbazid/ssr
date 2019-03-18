import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/about">Go To About</Link>
        <p>hello</p>
        <button>Click me</button>
      </div>
    );
  }
}
