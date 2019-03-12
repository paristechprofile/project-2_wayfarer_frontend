import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import ProfileContainer from "./containers/ProfileContainer";
import CitiesContainer from "./containers/CitiesContainer";
import HomeContainer from "./containers/HomeContainer";
import CreatePost from "./components/CreatePost";
import PostModal from "./components/PostModal";
import jwtDecode from 'jwt-decode';

import "./App.css";

class App extends Component {
  state = {
    username: '',
    pw: '',
    image: '',
    firstName: '',
    lastName: '',
    currentCity: '',
    joinDate: '',
    isLoggedIn: false,
    modalIsOpen: false,
    user: null
  };

  componentDidMount() {
    if (localStorage.token) {
    const decoded = jwtDecode(localStorage.token);
    this.setState({
      isLoggedIn:true,
      username: decoded.username,
      _id: decoded.id
    })
    console.log(decoded)
  }
      else {
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

  submitUserEdit = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `https://project-wayfarer-app.herokuapp.com/user`,
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
      .post("https://project-wayfarer-app.herokuapp.com/user/signup", {
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
      .post("https://project-wayfarer-app.herokuapp.com/user/login", {
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
    console.log(this.props)
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
                handleInput={this.handleInput}
                submitUserEdit={this.submitUserEdit}/>
              )
            }} 
          />
          <Route 
            path="/cities" 
            render={props =>{
              return (
                <CitiesContainer
                isLoggedIn={this.state.isLoggedIn} 
                user={this.state.user}
                username={this.state.username}
                handleInput={this.handleInput}
                id={this.state._id}/>
              )
            }}
          />
          {/* <Route exact path="/" component={HomeContainer} /> */}
          <Route exact path="/" render={props => <HomeContainer {...props} />} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/post" component={PostModal} />
        </Switch>
      </div>
    );
  }
}

export default App;
