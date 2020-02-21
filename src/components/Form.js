import React, { Component } from "react";

export default class From extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ala", age: 4 };
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  onAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-component">
        <h3>State Forma: {JSON.stringify(this.state)}</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="number"
          value={this.state.age}
          onChange={this.onAgeChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
