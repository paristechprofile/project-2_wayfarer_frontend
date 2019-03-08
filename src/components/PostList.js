
import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'

export default class PostList extends Component {
 
  state = {
    posts : []
  }
  
  componentDidMount () {
    let cityId = "5c82e312232f2b049cfa6fa8"
    // router.get('/:id/posts', controllers.cities.getPosts);
    console.log('mounted posts')
    axios({
      method: "get",
        url: `http://localhost:3001/cities/${cityId}/posts`,
        headers: { authorization: `Bearer ${localStorage.token}` }
    })
      .then(response => {
        console.log('AXIOS RESPONSE:', response);
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