import React, { Component } from 'react'

class CityCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      city: this.props.info
    }
  }

  render () {
    return (
      <div className='city-preview'>
        <img src={this.state.city.image} alt={this.state.city.name} className='city-image' />
        <h3>{this.state.city.name}</h3>
        <h3>{this.state.city.country}</h3>
        {/* {this.props.isLoggedIn ? <h4>Age: {this.state.dog.age}</h4> : ''}
        {this.props.isLoggedIn ? <h4>Walk Frequency: {this.state.dog.frequency}</h4> : ''} */}
      </div>
    )
  }
}

export default CityCard