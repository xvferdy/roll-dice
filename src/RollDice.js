import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieNum: "one",
      dieNum2: "one",
    };
  }
  static defaultProps = {
    numArr: ["one", "two", "three", "four", "five", "six"],
  };

  randNum = () => {
    let rand1 = Math.floor(Math.random() * this.props.numArr.length) + 1;
    this.setState({ dieNum: this.props.numArr[rand1 - 1] });

    let rand2 = Math.floor(Math.random() * this.props.numArr.length) + 1;
    this.setState({ dieNum2: this.props.numArr[rand2 - 1] });

    // console.log(rand1);
    // console.log(rand2);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die face={this.state.dieNum} />
          <Die face={this.state.dieNum2} />
        </div>

        <button onClick={this.randNum}>Roll!</button>
      </div>
    );
  }
}

export default RollDice;
