import React, { Component } from 'react'

export default class CityProfile extends Component {
  render() {
    return (
      <div>
        <h2>City Name</h2>
        <img className="temp-city-pic" src="../../images/blankcityimage.jpg" alt="Placeholder" />
        <button>Create New Post</button>
        <div className="city-posts-list">
            <h3>Append city posts here.</h3>
        </div>
      </div>
    )
  }
}
