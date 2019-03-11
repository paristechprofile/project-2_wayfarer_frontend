import React, { Component } from "react";
import LogOut from "./LogOut";
import { Link } from "react-router-dom"; 
import './NavBar.css'
import logo from "./images/Mountain-Icon.png"

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="nav-extended">
          <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img id="logo" src={logo} alt='some value'/>wayfarer</a>
            {this.props.isLoggedIn ? (
              
              <ul className="right hide-on-med-and-down">
                <li><Link to="/cities">Cities</Link></li>
                <li><Link to="/user/profile">Profile</Link></li>
                <li><LogOut
                    isLoggedIn={this.props.isLoggedIn}
                    handleLogOut={this.props.handleLogOut}/>
                </li>
              </ul>
            ) : (
              <ul className="right hide-on-med-and-down">
                  <li><Link to="/login">Log In</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}