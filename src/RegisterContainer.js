import React, { Component } from "react";
import Register from "./Register";
import { Redirect, B } from "react-router-dom";

export default class RegisterContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }



  render() {
    return <Register checkAuth={this.props.checkAuth} />;
  }
}
