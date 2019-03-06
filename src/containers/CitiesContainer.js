import React, { Component } from 'react'
import CityList from '../components/CityList'
import CityProfile from '../components/CityProfile'

export default class CitiesContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is the Cities Container.</h1>
        <CityList />
        <CityProfile />
      </div>
    )
  }
}
