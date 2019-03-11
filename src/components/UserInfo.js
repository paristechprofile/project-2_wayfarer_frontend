import React, { Component } from 'react'
import axios from "axios";
import UserPostList from './UserPostsList';


export default class UserInfo extends Component {

  componentDidMount () {
    axios({
      method: "put",
        url: `https://project-wayfarer-app.herokuapp.com/user`,
        headers: { authorization: `Bearer ${localStorage.token}` }
    })
      .then(response => {
        console.log('AXIOS RESPONSE:', response);
        this.setState({
          posts: response.data
        })
      })
  }

  render() {
    const { user } = this.props;
    console.log(this.props)    
    console.log(user)

      if (this.props.username){
        return (
          <div className='userInfo'>
            <h5>Username: {this.props.username}</h5>
            
            <h6>firstName: {this.props.firstName}</h6>
            <h6>lastName: {this.props.lastName}</h6>
            <h6>currentCity: {this.props.currentCity}</h6>
            <form>
              <input type="text" name="username" defaultValue="Username" onChange={this.props.handleInput}/>
              <input type="text" name="firstName" defaultValue="First Name" onChange={this.props.handleInput}/>
              <input type="text" name="lastName" defaultValue="Last Name" onChange={this.props.handleInput}/>
              <input type="text" name="currentCity" defaultValue="Current City" onChange={this.props.handleInput}/>
              <button type="submit" onClick={this.props.submitUserEdit}>Save</button>
            </form>
            <UserPostList/>
          </div>
        )} 
        else { 
          return (
            <div className='userInfo'>
            <h5>no user</h5>
          </div>
          )
      }
  }
}
