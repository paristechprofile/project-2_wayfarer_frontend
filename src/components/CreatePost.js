import React, { Component } from 'react'

export default class CreatePost extends Component {
  render() {
    return (
      <div>
        <h3>Create New Post</h3>
        <form>
            <select>
                <option value="city1">San Francisco</option>
                <option value="city2">London</option>
                <option value="city3">Dubai</option>
            </select>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Text" />
            <button>Submit Post</button>
        </form>

      </div>
    )
  }
}
