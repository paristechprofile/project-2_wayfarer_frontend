
import React, { Component } from 'react'
import axios from 'axios'
import UserPost from './Posts'

export default class UserPostList extends Component {
    state = {
        posts : []
    }
    
    componentDidMount () {
        console.log('mounted posts')
        axios({
            method: "get",
            url: `https://project-wayfarer-app.herokuapp.com/user/:id/post`,
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
