import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'
import PostList from '../components/PostList'

export default class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is the User Profile Container.</h1>
        <UserInfo />
        <PostList />
      </div>
    )
  }
}
