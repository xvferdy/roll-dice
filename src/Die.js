import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let { face } = this.props;
    return (
      <div className="Die">
        <i
          class={`fas fa-dice-${face} ${
            this.props.rolling ? "rotate-scale-up-diag-1" : null
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
