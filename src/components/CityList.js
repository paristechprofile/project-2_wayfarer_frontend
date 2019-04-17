import React, { Component } from 'react'
import axios from 'axios'
import CityCard from './CityCard'
import './CityList.css'

export default class CityList extends Component {
  state= {
    cities: []
  }

  componentDidMount () {
    axios.get('http://localhost:3001/cities')
      .then(response => {
        this.setState({
          cities: response.data
        }) 
      })
      
  }

  render() {
    let showCities = this.state.cities.map((city, i) => {
      return (
        <div key={i}>
          <CityCard 
          info={city} 
          isLoggedIn={this.props.isLoggedIn} 
          handleCityClick={this.props.handleCityClick}
          id={city._id}
          />
        </div>
      )
    })
    return (
      <div>
        <div>
          {showCities}
        </div>
      </div>
    )
  }
}