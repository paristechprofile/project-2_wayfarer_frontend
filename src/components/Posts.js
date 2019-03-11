import React, { Component } from 'react'
import Moment from 'react-moment';

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: this.props.info
    }
  }

  render () {
    console.log(this.state.post);
    //npm install --save moment react-moment
    return (
      
      <div className='post-preview'>
          <h5>{this.state.post.author.firstName}</h5>
           <Moment format= "YYYY/DD/MM">
          {this.state.post.date}
          </Moment>
          <h5>{this.state.post.text}</h5>
     </div>
    )
  }
}

export default Posts


