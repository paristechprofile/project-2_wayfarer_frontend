// import React, { Component } from 'react'

// export default class CityProfile extends Component {
//   render() {
//     return (
//       <div>
//         <h2>City Name</h2>
//         <img className="temp-city-pic" src="../../images/blankcityimage.jpg" alt="Placeholder" />
//         <button>Create New Post</button>
//         <div className="city-posts-list">
//             <h3>Append city posts here.</h3>
//         </div>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import PostList from '../components/PostList'
import CreatePost from '../components/CreatePost'
import axios from 'axios'

export default class CityProfile extends Component {
  state = {
    showCreate: false,
    title: '',
    text: ''
  }

  show = () => {
    console.log('clicked the post')
    if (this.state.showCreate){
      this.setState({
        showCreate: false
      })
    } else {
      this.setState({
        showCreate: true
      })
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitPost = () => {
    let post = {
      title: this.state.title,
      text: this.state.text
    }
    console.log(post)
    
    // send post to backend
    let  cityId="5c82e312232f2b049cfa6fa7";
    axios({
      method: "post",
      url:`http://localhost:3001/cities/${cityId}/post`,
      header:{ authorization: `Bearer ${localStorage.token}`},
    }).then(response => {
      console.log(response)
      debugger;

      this.setState({
        post: response.data.post
      })
      // localStorage.token = response.data.signedJwt;
    }).catch(err => {
      console.log(err);
    });

  }
  // ////////

  // ///////

  render() {
    if (this.state.showCreate){
      return (
        <div>
          <h1>This is the Cities Profile.</h1>
          <button className="addPost" onClick={this.show} >Add a Post</button>
          <CreatePost handleInput={this.handleInput} submitPost={this.submitPost}/>
          <PostList />
        </div>
      )
    } else {
      return (
        <div>
          <h1>This is the Cities Profile.</h1>
          <button className="addPost" onClick={this.show} >Add a Post</button>
          
          <PostList />
        </div>
      )
    }
    
  }
}
