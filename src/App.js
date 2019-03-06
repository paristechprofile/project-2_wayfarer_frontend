import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios';

import LogInForm from './components/LogInForm';
import LogOut from './components/LogOut';
import SignUpForm from './components/SignUpForm';
import ProfileContainer from './containers/ProfileContainer'
import CitiesContainer from './containers/CitiesContainer'
import HomeContainer from './containers/HomeContainer'

import './App.css';

class App extends Component {
  state = {
    username: '',
    pw: '',
    isLoggedIn: false,
    user: null
  }

  componentDidMount () {
    if (localStorage.token) {
      axios(
        { 
        method: 'get', 
        url: `http://localhost:3001/user/`, 
        headers: { authorization: `Bearer ${localStorage.token}` } 
      })
      .then( response => {
        console.log(response)
          this.setState({
            isLoggedIn: true,
            user: response.data
          })
      })
      .catch(err => console.log(err))
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut = () => {
    this.setState({
      username: '',
      pw: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    console.log('meow')
    axios.post('http://localhost:3001/user/signup', 
			{ username: this.state.username,
      	pw: this.state.pw }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
          this.setState({
            isLoggedIn: true
          })
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', {
      username: this.state.username,
      pw: this.state.pw
    })
    .then( response => {
      localStorage.token = response.data.signedJwt
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {/* Temporary Nav links to make it easier to get to different components for now */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cityprofile">Cities</Link></li>
            <li><Link to="/user">User Profile</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm 
                  isLoggedIn={this.state.isLoggedIn} 
                  handleInput={this.handleInput} 
                  handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm 
                  isLoggedIn={this.state.isLoggedIn} 
                  handleInput={this.handleInput} 
                  handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut 
                  isLoggedIn={this.state.isLoggedIn} 
                  handleLogOut={this.handleLogOut} />
                )
              }}
            />
            
            {/* this will be logged-in user's view of city page */}
            {/* <Route
              path='/'
              render={() => {
                return (
                  <DogList isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            /> */}

          </Switch>
          <Switch>
            <Route path='/user' component= { ProfileContainer } />
            <Route path='/cityprofile' component= { CitiesContainer } />
            <Route path='/' component= { HomeContainer } />
          </Switch>
      </div>
    );
  }
}

export default App;
