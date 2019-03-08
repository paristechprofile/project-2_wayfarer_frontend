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
      console.log(res);
      let grabbedUsername = res.data[0].username;
      console.log(grabbedUsername);
      this.setState({
        userInfo: [res.data[0]]
      })
    })
  }

  render() {
    console.log(this.state);
    console.log("Your userinfo render ran.")
    
    const { userInfo } = this.state;
    console.log(userInfo);
    const userInfoProps = userInfo.length ? (
      userInfo.map(userInfo => {
        return (
          <div>
            <p>{userInfo.username}</p>
          </div>
          )
      })
    )
    : (
    <div>No userinfo yet</div>
    );
    return <div> { userInfoProps } </div>
    // return (<div>Returning something</div>)
}

}
