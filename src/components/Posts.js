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

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: this.props.info
    }
  }

  render () {
    return (
      <div className='post-preview'>
        <h3>{this.state.post.author}</h3>
        <h3>{this.state.post.date}</h3>
        <p>{this.state.post.text}</p>
        {/* {this.props.isLoggedIn ? <h4>Age: {this.state.dog.age}</h4> : ''}
        {this.props.isLoggedIn ? <h4>Walk Frequency: {this.state.dog.frequency}</h4> : ''} */}
      </div>
    )
  }
}

export default Posts


