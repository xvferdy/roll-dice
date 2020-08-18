import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      isRolling: false,
    };
  }
  static defaultProps = {
    numArr: ["one", "two", "three", "four", "five", "six"],
  };

  randNum = () => {
    //#1 choose 2 random number, 0-5
    let rand1 = Math.floor(Math.random() * this.props.numArr.length);
    let rand2 = Math.floor(Math.random() * this.props.numArr.length);

    //#2 random number going to choose from numArr's index, 0-5
    let newDie1 = this.props.numArr[rand1];
    let newDie2 = this.props.numArr[rand2];

    //#3 set state with the choosen numArr
    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true,
    });

    //#4 wait 1 sec then set isRolling to false again
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>

        <button onClick={this.randNum} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
