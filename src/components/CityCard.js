import React, { Component } from 'react'
import './CityCard.css'

class CityCard extends Component{ 
  state = {
      city: this.props.info,
      id: ""
    }

passMyCityId = () =>{
  this.props.handleCityClick(this.props.id);
}

  render () {
    // console.log(this.props.id);
    return (
      <div className='city-preview1'>
        <div className='row city-preview1'>
          <div className='col city-preview2'>
            <img 
            src={this.state.city.image} 
            onClick={this.passMyCityId}  
            alt={this.state.city.name} 
            name={this.state.city.name} 
            className={this.state.city._id}
            id="city-card"/> 
          </div>
        </div>
        <div className='row city-preview3'>
          <div className='col city-preview3'>
            <h6>{this.state.city.name}</h6>
          </div>  
        </div>
      </div>
    )
  }
}

export default CityCard