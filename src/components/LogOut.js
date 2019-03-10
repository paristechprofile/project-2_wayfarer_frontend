import React, { Component } from "react";
//import css

export default class LogOut extends Component {
  render() {
    return (
      <div>
        <a href="/" onClick={this.props.handleLogOut}>Log Out</a>
      </div>
    );
  }
}