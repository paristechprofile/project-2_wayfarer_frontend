import React, { Component } from 'react'
import axios from "axios";
import UserPostList from './UserPostsList';

export default class UserInfo extends Component {
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  componentDidMount () {
    axios({
      method: "put",
        url: `http://localhost:3001/user`,
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
      if (user){
        return (
          <div className='userInfo'>
            <h5>Username: {user[0].username}</h5>
            <h6>Join Date: {user[0].joinDate}</h6>
            <h6>firstName: {user[0].firstName}</h6>
            <h6>lastName: {user[0].lastName}</h6>
            <h6>currentCity: {user[0].currentCity}</h6>
            <button>Edit User</button>
            <form>
              <input type="text" name="username" defaultValue="Username" onChange={this.props.handleInput}/>
              <input type="text" name="firstName" defaultValue="First Name" onChange={this.props.handleInput}/>
              <input type="text" name="lastName" defaultValue="Last Name" onChange={this.props.handleInput}/>
              <input type="text" name="currentCity" defaultValue="Current City" onChange={this.props.handleInput}/>
              <button type="submit" onClick={this.props.submitUserEdit}>Save</button>
            </form>
            {/* added the list of the user posts */}
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
