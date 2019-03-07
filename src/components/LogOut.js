import React, { Component } from "react";
//import css

export default class LogOut extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleLogOut}>Log Out</button>
      </div>
    );
  }
}
