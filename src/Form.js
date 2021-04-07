import React, { Component } from "react";

class Form extends Component {
    state = {
        userName : ''
    }
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(`https://api.github.com/users/${this.state.userName}`);
    const data = await resp.json();
    this.props.onSubmit(data);
    this.setState({userName: ''})
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub Username"
          value={this.state.userName}
          onChange={event => this.setState({userName : event.target.value})}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
