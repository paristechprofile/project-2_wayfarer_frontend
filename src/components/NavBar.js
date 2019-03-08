import React, { Component } from "react";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
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
                  <a href="#loginBtn" className="modal-trigger">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#signUpBtn" className="modal-trigger">
                    Sign Up
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
