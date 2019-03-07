import React, { Component } from "react";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  loginButton = (props) => {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  };

  logoutButton = (props) => {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  };

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left">
              Wayfarer
            </a>

              {this.props.isLoggedIn ? (
                <ul className="right">
                  <li>
                    <LogOut
                      isLoggedIn={this.props.isLoggedIn}
                      handleLogOut={this.props.handleLogOut}
                      />
                  </li>
                </ul>
              ) : (
                <ul className="right">
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              )}
          </div>
        </nav>
      </div>
    );
  }
}
