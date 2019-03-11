import React, { Component } from 'react'
import PostList from '../components/PostList'
import CreatePost from '../components/CreatePost'
import axios from 'axios'

export default class CityProfile extends Component {
  constructor(props){
    super(props)
    console.log("props in cityProfile  props ")
    console.log(props)
    this.state = {
      showCreate: false,
      title: '',
      text: '',
      props: this.props
    }
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
    // let cityId= this.props.clickCityId
    axios({
      method: "post",
      url:`https://project-wayfarer-app.herokuapp.com/${cityId}/post`,
      headers:{ authorization: `Bearer ${localStorage.token}`},
    }).then(response => {
      console.log(response)
      this.setState({
        post: response.data.post
      })
      // localStorage.token = response.data.signedJwt;
    }).catch(err => {
      console.log(err);
    });

  }
 

  render() {
    // console.log("city id in cityProfile")
    console.log('CityProfile.js', this.props.clickCityId)
    if (this.state.showCreate){
      return (
        <div>
          <h1>This is the Cities Profile.</h1>
          <button className="addPost" onClick={this.show} >Add a Post</button>
          <CreatePost handleInput={this.handleInput} submitPost={this.submitPost}/>
          <PostList 
          handleCityClick={this.props.handleCityClick}
          clickCityId={this.props.clickCityId}
          />
        </div>
      )
    } else {
      return (
        <div>
          <h1>This is the Cities Profile.</h1>
          <button className="addPost" onClick={this.show} >Add a Post</button>
          <PostList props={this.state.props} handleCityClick={this.props.handleCityClick}
          clickCityId={this.props.clickCityId}/>
        </div>
      )
    }  
  }
}
