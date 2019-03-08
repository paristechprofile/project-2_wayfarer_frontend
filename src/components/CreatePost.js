import React, { Component } from 'react'

export default class CreatePost extends Component {
  render() {
    return (
      <div>
        <h3>Create New Post</h3>

            <select>
                <option value="city1">San Francisco</option>
                <option value="city2">London</option>
                <option value="city3">Dubai</option>
            </select>
            <input type="text" placeholder="Title" name='title' onChange={this.props.handleInput}/>
            <input type="text" placeholder="Text" name='text' onChange={this.props.handleInput}/>
            <button onClick={this.props.submitPost}>Submit Post</button>
        

      </div>
    )
  }
}
