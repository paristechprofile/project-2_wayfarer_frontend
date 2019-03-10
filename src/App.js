import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import Modal from "react-modal";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import ProfileContainer from "./containers/ProfileContainer";
import CitiesContainer from "./containers/CitiesContainer";
import HomeContainer from "./containers/HomeContainer";
import CreatePost from "./components/CreatePost";
import PostModal from "./components/PostModal";
// import CityList from "./components/CityList"

import "./App.css";

Modal.setAppElement("body");
class App extends Component {
  state = {
    username: '',
    pw: '',
    image: '',
    firstName: '',
    lastName: '',
    currentCity: '',
    joinDate: '', //I think this shouldn't be state b/c it shouldn't change. but how do we render it in user component?
    isLoggedIn: false,
    modalIsOpen: false,
    user: null
  };
  
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#000";
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    if (localStorage.token) {
      axios({
        method: "get",
        url: `http://localhost:3001/user`,
        headers: { authorization: `Bearer ${localStorage.token}` }
      })
        .then(response => {
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
    // console.log(this);
      this.setState({
      [e.target.name]: e.target.value
    }, () => {
      
      console.log(this.state)}
    );
  };
  submitUserEdit = (e) => {
    e.preventDefault();
    // console.log("you clicked user submit")
    axios({
      method: "put",
      url: `http://localhost:3001/user`,
      headers: {authorization: `Bearer ${localStorage.token}`},
      data: {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        currentCity: this.state.currentCity
      }
    })
      .then(response => {
        this.setState({response})
    })
  }
  
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
          firstName: "",
          lastName: "",
          currentCity: "",
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

  render() {
    return (
      <div className="App">
        <NavBar
          brand="logo"
          isLoggedIn={this.state.isLoggedIn}
          handleLogOut={this.handleLogOut}
          handleInput={this.handleInput}
          handleSignUp={this.handleSignUp}
          modalIsOpen={this.state.modalIsOpen}
          afterOpenModal={this.afterOpenModal}
          closeModal={this.closeModal}
          openModal={this.openModal}
          handleLogIn={this.handleLogIn}
        />
        <ul className="temp-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
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
        <Switch>
          <Route
            path="/signup"
            render={() => (
              this.state.loggedIn ? (
                <Redirect to="/user/profile"/>
              ) : (
                <SignUpForm
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                />
              )
            )}
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

          <Route 
            path="/user/profile" 
            render={props =>{
              return (
                <ProfileContainer 
                isLoggedIn={this.state.isLoggedIn} 
                user={this.state.user}
                username={this.state.username}
                image={this.state.image}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                currentCity={this.state.currentCity}
                joinDate={this.state.joinDate}
                isLoggedIn={this.state.isLoggedIn}
                user={this.state.user}
                handleInput={this.handleInput}
                submitUserEdit={this.submitUserEdit}/>
              )
            }} 
          />
          <Route path="/cities" component={CitiesContainer} />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/post" component={PostModal} />
        </Switch>
      </div>
    );
  }
}

export default App;
