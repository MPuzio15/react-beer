import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter-component">
        <button onClick={this.props.drink}>Wypij piwo</button>
        <span>Wypite: {this.props.count}</span>
      </div>
    );
  }
}

export default Counter;
