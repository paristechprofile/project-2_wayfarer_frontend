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
          handleInput={this.props.handleInput}
          isLoggedIn={this.props.isLoggedIn} 
          username={this.props.username}
          image={this.props.image}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          currentCity={this.props.currentCity}
          joinDate={this.props.joinDate}
          submitUserEdit={this.props.submitUserEdit}
          />
        <UserPostsList />
      </div>
    )
  }
}
