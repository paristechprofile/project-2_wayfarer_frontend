import React, { Component } from "react";
import LogOut from "./LogOut";

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
              <li>Sign In</li>
              <li>Sign Up</li>
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
