// import React, { Component } from 'react'
// import Posts from './Posts'

// export default class PostList extends Component {
//   render() {
//     return (
//       <div>
//         <h2>User Posts Go Here</h2>
//         <Posts />
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'



export default class PostList extends Component {
 
  state = {
    posts : []
    // cityId : '5c80a990d6449e1b62decff4'

  }
  
  componentDidMount () {
    let cityId = '5c80a990d6449e1b62decff4'
    // router.get('/:id/posts', controllers.cities.getPosts);
    axios.get(`http://localhost:3001/?id=${cityId}/posts`)
      .then(response => {
        this.setState({
          posts: [response.data]
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