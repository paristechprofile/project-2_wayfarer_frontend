import React, { Component } from 'react'
import axios from "axios";
import Moment from 'react-moment';

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
            <h6>Join Date: <Moment format="DD/MM/YYYY">{user[0].joinDate}</Moment></h6> 
            <h6>firstName: {user[0].firstName}</h6>
            <h6>lastName: {user[0].lastName}</h6>
            <h6>currentCity: {user[0].currentCity}</h6>
            {/* <button>Edit User</button> */}
            <form>
              <input type="text" name="username" defaultValue="Username" onChange={this.props.handleInput}/>
              <input type="text" name="firstName" defaultValue="First Name" onChange={this.props.handleInput}/>
              <input type="text" name="lastName" defaultValue="Last Name" onChange={this.props.handleInput}/>
              <input type="text" name="currentCity" defaultValue="Current City" onChange={this.props.handleInput}/>
              <button type="submit" onClick={this.props.submitUserEdit}>Save</button>
            </form>
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
