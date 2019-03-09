import React, { Component } from 'react'
import axios from "axios";

export default class UserInfo extends Component {
  
  componentDidMount () {
    axios({
      method: "get",
        url: `http://localhost:3001/posts`,
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
console.log(user)
      if (user){
        return (
          <div className='userInfo'>
            <h5>Username: {user[0].username}</h5>
            <h6>Join Date: {user[0].joinDate}</h6>
            <button>Edit User</button>
            <form>
              <input type="text" placeholder="U"/>
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
