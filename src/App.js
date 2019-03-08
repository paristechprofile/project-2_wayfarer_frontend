import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import Modal from "react-modal";
import LogInForm from "./components/LogInForm";
import LogOut from "./components/LogOut";
import SignUpForm from "./components/SignUpForm";
import ProfileContainer from "./containers/ProfileContainer";
import CitiesContainer from "./containers/CitiesContainer";
import HomeContainer from "./containers/HomeContainer";
import CreatePost from "./components/CreatePost";
import PostModal from "./components/PostModal";

import "./App.css";

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
class App extends Component {
  state = {
    username: "",
    pw: "",
    isLoggedIn: false,
    user: null
  };

  componentDidMount() {
    if (localStorage.token) {
      axios({
        method: "get",
        url: `http://localhost:3001/user`,
        headers: { authorization: `Bearer ${localStorage.token}` }
      })
        .then(response => {
          console.log(response);
          this.setState({
            isLoggedIn: true,
            user: response.data
          });
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogOut = () => {
    this.setState({
      username: "",
      pw: "",
      isLoggedIn: false
    });
    localStorage.clear();
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUp = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/signup", {
        username: this.state.username,
        pw: this.state.pw
      })
      .then(response => {
        console.log(response);
        localStorage.token = response.data.signedJwt;
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  };

  handleLogIn = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", {
        username: this.state.username,
        pw: this.state.pw
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  };

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
      <div className="App">
        <NavBar
          brand="logo"
          right
          isLoggedIn={this.state.isLoggedIn}
          handleLogOut={this.handleLogOut}
          handleInput={this.handleInput}
          handleSignUp={this.handleSignUp}
        />
        <ul className="temp-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cityprofile">Cities</Link>
          </li>
          <li>
            <Link to="/user/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/createpost">Create Post</Link>
          </li>
          <li>
            <Link to="/post">Post Modal</Link>
          </li>
        </ul>

        {/* <button onClick={this.openModal}>Sign Up</button>
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
                            handleInput={this.handleInput}
                            handleSignUp={this.handleSignUp}
                          />
                  </Modal> */}


        {/* <a href="#testing" className="btn modal-trigger">
          Testing
        </a>
        <div className="modal" id="testing">
          <div className="modal-content">my little pony</div>
        </div> */}
        <Switch>
          <Route
            path="/signup"
            render={() =>
              this.state.loggedIn ? (
                <Redirect to="/user/profile" />
              ) : (
                <SignUpForm
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                />
              )
            }
          />
          <Route
            path="/login"
            render={props => {
              return (
                <LogInForm
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleLogIn={this.handleLogIn}
                />
              );
            }}
          />
          {/* <Route
            path="/logout"
            render={props => {
              return (
                <LogOut
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogOut={this.handleLogOut}
                />
              );
            }}
          /> */}

          <Route path="/user/profile" component={ProfileContainer} />
          <Route path="/cityprofile" component={CitiesContainer} />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/post" component={PostModal} />
        </Switch>
      </div>
    );
  }
}

export default App;
