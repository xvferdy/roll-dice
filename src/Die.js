import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let { face } = this.props;
    return (
      <div className="Die">
        <i class={`fas fa-dice-${face}`}></i>
      </div>
    );
  }
}

export default Die;
