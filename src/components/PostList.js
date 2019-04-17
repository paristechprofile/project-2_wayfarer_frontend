import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'

export default class PostList extends Component {
 
  state = {
    posts : []
  }
  
  componentDidMount () {
    let cityId = "5cb7a0181b8a5545fdb25aea"
    axios({
      method: "get",
        url: `http://localhost:3001/cities/${cityId}/posts`,
        // headers: { authorization: `Bearer ${localStorage.token}` }
    })
      .then(response => {
        this.setState({
          posts: response.data
        })
      })
  }
  
  render() {
    const showPosts = this.state.posts.reverse().map((post, i) => {
      return (
        <div key={i}>
          <Posts info={post} isLoggedIn={this.props.isLoggedIn} />
        </div>
      )
    })
    return (
      <div>
        {showPosts}
      </div>
    )
  }
}