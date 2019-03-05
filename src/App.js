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
      email: '',
      password: '',
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
    axios.post('http://localhost:3001/user/signup', 
			{ email: this.state.email,
      	password: this.state.password }
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
      email: this.state.email,
      password: this.state.password
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
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    );
  }
}

export default App;
