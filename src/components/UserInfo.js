import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <h2>List User Information Here</h2>
        <img class="temp-profile-pic" src="../../images/blankuserimage.jpg" />
        <ul className="user-info">
          <li>Name: firstName lastName</li>
          <li>City: currentCity</li>
          <li>Username: username</li>
        </ul>
        <button>Edit User Info</button>
      </div>
    )
  }
}
