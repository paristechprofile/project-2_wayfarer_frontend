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
      // console.log(res);
      let grabbedUsername = res.data[0].username;
      // console.log(grabbedUsername);
      this.setState({
        userInfo: [res.data[0]]
      })
    })
  }

  render() {
    // console.log(this.state);
    // console.log("Your userinfo render ran.")
    
    const { userInfo } = this.state;

    const userInfoProps = userInfo.length ? (
      userInfo.map(userInfo => {
        return (
          <div className='userInfo'>
            <h2>{userInfo.username}</h2>
            <h6></h6>
            On their public profile page, see their name, the current city they have set in their profile, and their join date.
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
