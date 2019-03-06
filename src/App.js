import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
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
        <h1>Project Wayfarer</h1>
        <h2>Sign up</h2>
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' onChange={this.handleInput} />
          </div>

          <div>
            <label htmlFor='pw'>Password</label>
            <input type='text' name='pw' onChange={this.handleInput} />
          </div>
          <button onClick={this.handleSignUp}>Sign UP</button>
        </form>
        {/* login form to add to App.js */}
        <h2>Log In</h2>
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor='pw'>Password</label>
            <input type='text' name='pw' onChange={this.handleInput} />
          </div>
          <button onClick={this.handleLogIn}>Log In</button>
          <button onClick={this.handleLogOut}>Log Out</button>
        </form>
      </div>
    );
  }
}

export default App;
