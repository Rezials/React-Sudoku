import React, { Component } from "react";

class Cell extends Component {
  onClick = () => {
    if (!this.props.isInitial) {
      this.props.onChange((this.props.number + 1) % 5);
    }
  };

  render() {
    return (
      <div
        onClick={this.onClick}
        className={`cell ${this.props.isInitial ? "initial" : ""}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

export default Cell;
