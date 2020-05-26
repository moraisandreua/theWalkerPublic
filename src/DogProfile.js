import React, { Component } from "react";
import DogProfileContent from "./DogProfileContent";

export default class DogProfile extends Component {
  render() {
    return (
      <div>

        <DogProfileContent {...this.props} />
      </div>
    );
  }
}
