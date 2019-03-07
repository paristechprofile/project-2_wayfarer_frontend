import React, { Component } from "react";
import LogOut from "./LogOut";
import { Link, Route, Switch } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" className="brand-logo left">
              Wayfarer
            </a>
            <ul class="right">
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              {this.props.isLoggedIn ? (
                <li>
                  <LogOut
                    isLoggedIn={this.props.isLoggedIn}
                    handleLogOut={this.props.handleLogOut}
                  />
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
