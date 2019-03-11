
import React, { Component } from 'react'
import axios from 'axios'
import UserPost from './Posts'

export default class UserPostList extends Component {
    state = {
        posts : []
    }
    
    componentDidMount () {
        // let cityId = '5c82ab6fdab451463d031022  '
        // router.get('/:id/posts', controllers.cities.getPosts);
        console.log('mounted posts')
        axios({
            method: "get",
            url: `http://localhost:3001/post`,
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
        const showPosts = this.state.posts.map((post, i) => {
        return (
            <div key={i}>
            {/* <h2>User Posts</h2> */}
            <UserPost info={post} isLoggedIn={this.props.isLoggedIn} />
            </div>
            )
        })
        return (
        <div>
            {showPosts}
            <h6>User Posts </h6> 
        </div>
        )
    }
}
