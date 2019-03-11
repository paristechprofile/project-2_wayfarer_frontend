import React, { Component } from 'react'
import './CityCard.css'

class CityCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      city: this.props.info,
      id: ""
    }
  }

passMyCityId = () =>{
  this.props.handleCityClick(this.props.id);
}

  render () {
    console.log("i am inside the citycard")
    console.log(this.props.id);
    return (
      <div className='city-preview'>
        <img 
          src={this.state.city.image} 
          alt={this.state.city.name} 
          name={this.state.city.name} 
          className={this.state.city._id}
          id="city-card"
        /> 
        <h3>{this.state.city.name}</h3>
        <button 
          onClick={this.passMyCityId}  
          className={this.state.city._id}  
          name={this.state.city.name} 
          >
          Display City
        </button>
      </div>
    )
  }
}

export default CityCard