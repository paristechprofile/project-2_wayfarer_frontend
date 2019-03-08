import React, { Component } from "react";
import LogOut from "./LogOut";
import Modal from "react-modal";
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

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
<<<<<<< HEAD
                  <button onClick={this.openModal}>Log In</button>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Log In Modal"
                  >
                  <button onClick={this.closeModal}>X</button>
                    <LogInForm
                            isLoggedIn={this.state.isLoggedIn}
                            handleInput={this.props.handleInput}
                            handleLogIn={this.props.handleLogIn}
                            onRequestClose={this.closeModal}
                          />
                  </Modal>
                </li>
                <li>
                  <button onClick={this.openModal}>Sign Up</button>
=======
                  <button onClick={this.props.openModal}>Log In/Sign Up</button>
>>>>>>> tiffany
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
                  </Modal>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
