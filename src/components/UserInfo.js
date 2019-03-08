import React, { Component } from 'react'
import axios from "axios";

export default class UserInfo extends Component {
  state = {
    userInfo: []
  };

  componentDidMount() {
    var config = {
      headers: {'Authorization': "bearer " + localStorage.token}
  };
  
    axios.get("http://localhost:3001/user", config)
    .then(res => {
      this.setState({
        userInfo: res.data[0]
      })
    })
  }

  render() {
    const { userInfo } = this.state;
      return (
        <div className='userInfo'>
          <h5>{userInfo.username}</h5>
        </div>
      )  
  }
}
