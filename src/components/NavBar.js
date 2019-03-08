import React, { Component } from "react";
import LogOut from "./LogOut";
// import { Link } from "react-router-dom";
import Modal from "react-modal";
import SignUpForm from './SignUpForm'

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

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#000";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

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
                  <button onClick={this.openModal}>Sign Up</button>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                  <button onClick={this.closeModal}>X</button>
                    <SignUpForm
                            isLoggedIn={this.state.isLoggedIn}
                            handleInput={this.props.handleInput}
                            handleSignUp={this.props.handleSignUp}
                            onRequestClose={this.closeModal}
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
