// import React, { Component } from 'react'

// export default class Posts extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Append Post divs here.</h3>
//       </div>
//     )
//   }
// }


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
          {/* {this.props.isLoggedIn ? <h4>Age: {this.state.dog.age}</h4> : ''}
          {this.props.isLoggedIn ? <h4>Walk Frequency: {this.state.dog.frequency}</h4> : ''} */}
     </div>
    )
  }
}

export default Posts


