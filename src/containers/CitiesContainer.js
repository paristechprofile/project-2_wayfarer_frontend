import React, { Component } from 'react'
import CityList from '../components/CityList'
import CityProfile from '../components/CityProfile'

export default class CitiesContainer extends Component {
  state= {
    clickedCity: "",
    id: ""
  }


  handleCityClick = (e) => {
    e.preventDefault();
    console.log(`${e.target.className}`)
    let clickCityId = `${e.target.className}`;
    this.setState({ 
      id: clickCityId 
    });
}
    

  render() {
    console.log(this.state.id)
    return (
      <div>
        <h1>This is the Cities Container.</h1>
        <div className="row">

         
            <CityList handleCityClick={this.handleCityClick}/>
        
            <CityProfile />

        </div>

      </div>
    )
  }
}
