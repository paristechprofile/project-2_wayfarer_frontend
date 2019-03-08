import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'
import UserPostsList from '../components/UserPostsList'

export default class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is the User Profile Container.</h1>
        <UserInfo 
          user={this.props.user}
          />
        <UserPostsList />
      </div>
    )
  }
}
