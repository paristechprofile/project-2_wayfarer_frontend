import React, { Component } from "react";

export default class LogOut extends Component {
  render() {
    return (
      <div>
        <a href="/" onClick={this.props.handleLogOut}>Log Out</a>
      </div>
    );
  }
}