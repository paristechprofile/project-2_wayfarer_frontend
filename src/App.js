import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import './App.css';

class App extends Component {
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
