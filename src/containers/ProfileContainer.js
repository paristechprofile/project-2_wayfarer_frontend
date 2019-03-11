import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'
import UserPostsList from '../components/UserPostsList'

export default class ProfileContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col s4">
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
                submitUserEdit={this.props.submitUserEdit}/>
            </div>
            <div className="col s4">
              <UserPostsList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
