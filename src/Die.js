import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    console.log(`fas fa-dice-${this.props.dieNum}`);
    return (
      <div className="Die">
        <i class={`fas fa-dice-${this.props.dieNum}`}></i>
      </div>
    );
  }
}

export default Die;
