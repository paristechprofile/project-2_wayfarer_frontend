import React, { Component } from 'react'
import Posts from './Posts'

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h2>User Posts Go Here</h2>
        <Posts />
      </div>
    )
  }
}
