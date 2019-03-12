import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'

export default class PostList extends Component {
 
  state = {
    posts : []
  }
  
  componentDidMount () {
    let cityId = "5c869978a1be98000e80c0e7"
    axios({
      method: "get",
        url: `https://project-wayfarer-app.herokuapp.com/cities/${cityId}/posts`,
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