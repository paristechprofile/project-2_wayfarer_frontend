
import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'

export default class PostList extends Component {
 
  state = {
    posts : []
  }
  
  componentDidMount () {
    let cityId = '5c829e9cb9ec7b2d2010c344'
    // router.get('/:id/posts', controllers.cities.getPosts);
    console.log('mounted posts')
    axios.get(`http://localhost:3001/cities/${cityId}/posts`)
      .then(response => {
        console.log('AXIOS RESPOSE:', response);
        this.setState({
          posts: response.data
        })
      })
  }
  
  render() {
    const showPosts = this.state.posts.map((post, i) => {
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