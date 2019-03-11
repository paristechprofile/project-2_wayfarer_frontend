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
        url: `https://project-wayfarer-app.herokuapp.com/cities/${cityId}/posts`,
        // headers: { authorization: `Bearer ${localStorage.token}` }
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
// import React, { Component } from 'react'
// import axios from 'axios'
// import Posts from './Posts'

// export default class PostList extends Component {
//  constructor(props){
//    super(props)
//    console.log("print props in postList")
//    console.log(props)
//   this.state = {
//     posts : [],
//     match : this.props.match
//   }
//  }
  
  
//   componentDidMount () {
//     // that was working :  
//     let cityId = "5c82e312232f2b049cfa6fa8"
//     // let cityId= this.props.clickCityId
//     // router.get('/:id/posts', controllers.cities.getPosts);
//     console.log('mounted posts')
//     axios({
//       method: "get",
//         url: `http://localhost:3001/cities/${cityId}/posts`,
//         // headers: { authorization: `Bearer ${localStorage.token}` }
//     })
//       .then(response => {
//         console.log('AXIOS RESPONSE:', response);
//         this.setState({
//           posts: response.data
//         })
//       })
//   }
  
//   render() {
//   //   console.log("i am inside the postList   ")
//   //  console.log(this.props.clickCityId)
//   //  console.log("there is the state.posts", this.state.posts)
//   //  let postsArray = this.state.posts;
//   //  console.log("there is the state.match", this.state.match)
//   //  let matchObject = this.state.match;
//     const showPosts = this.state.posts.map((post, i) => {
//       return (
//         <div key={i}>
//           <Posts info={post} isLoggedIn={this.props.isLoggedIn} handleCityClick={this.props.handleCityClick}
//           clickCityId={this.props.clickCityId} />
//         </div>
//       )
//     })
//     return (
//       <div>
//          {/* 1 we need to add another container */}
//          {/* <CityDetail inf={city} isLoggedIn={this.props.isloggedIn}/> */}
//         {showPosts}
//       </div>
//     )
//   }
// }