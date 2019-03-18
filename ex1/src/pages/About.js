import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        I am the about page
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
