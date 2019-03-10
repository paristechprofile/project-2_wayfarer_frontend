import React, { Component } from "react";
import LogOut from "./LogOut";
import Modal from "react-modal";
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import { Link } from "react-router-dom"; 
import './NavBar.css'
import logo from "./images/Mountain-Icon.png"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("body");

export default class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <nav class="nav-extended">
          <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img src={logo}/>wayfarer</a>
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
                <li>
                  <li><Link to="/login">Log In</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                  {/* <a onClick={this.props.openModal}>Log In | Sign Up</a>
                  <Modal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                    contentLabel="Sign Up Modal"
                  >
                    <button onClick={this.props.closeModal}>X</button>
                    <LogInForm 
                      isLoggedIn={this.props.isLoggedIn} 
                      handleInput={this.props.handleInput} 
                      handleLogIn={this.props.handleLogIn}
                      />
                    <SignUpForm
                      isLoggedIn={this.props.isLoggedIn}
                      handleInput={this.props.handleInput}
                      handleSignUp={this.props.handleSignUp}
                      onRequestClose={this.props.closeModal}
                    />
                  </Modal> */}
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

  // <nav>
  //   <div class="nav-wrapper">
  //     <a href="#!" class="brand-logo">Logo</a>
  //     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      // <ul class="right hide-on-med-and-down">
      //   <li><a href="sass.html">Sass</a></li>
      //   <li><a href="badges.html">Components</a></li>
      //   <li><a href="collapsible.html">Javascript</a></li>
      //   <li><a href="mobile.html">Mobile</a></li>
      // </ul>
  //   </div>
  // </nav>

  // <ul class="sidenav" id="mobile-demo">
  //   <li><a href="sass.html">Sass</a></li>
  //   <li><a href="badges.html">Components</a></li>
  //   <li><a href="collapsible.html">Javascript</a></li>
  //   <li><a href="mobile.html">Mobile</a></li>
  // </ul>