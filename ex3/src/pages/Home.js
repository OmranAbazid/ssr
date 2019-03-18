import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };

    if (props.staticContext) {
      this.state = { data: props.staticContext.data };
    }
  }

  componentDidMount() {
    if (!this.state.data) {
      Home.getInitialData().then(data => this.setState({ data }));
    }
  }

  static getInitialData() {
    return Promise.resolve("hello");
  }

  render() {
    return (
      <div>
        <Link to="/about">Go To About</Link>
        <p>{this.state.data}</p>
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
