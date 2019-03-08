import React, { Component } from 'react'
import axios from 'axios'
import CityCard from './CityCard'



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
    // return (
    //   <div>
    //     <h2>This is the City List.</h2>
    //     <div className="city-cards">
    //         <h3>Append City Card components here.</h3>
    //     </div>
    //   </div>
    // )
    var showCities = this.state.cities.map((city, i) => {
      return (
        <div key={i}>
          <CityCard info={city} isLoggedIn={this.props.isLoggedIn} />
        </div>
      )
    })
    return (
      <div>
        {showCities}
      </div>
    )
  }
}
