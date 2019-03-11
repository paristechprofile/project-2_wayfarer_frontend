import React, { Component } from 'react'
import CityList from '../components/CityList'
import CityProfile from '../components/CityProfile'

export default class CitiesContainer extends Component {
  constructor(props){
    super(props)
    
    this.state= {
      clickCityId: "",
      props: this.props
    }
  }

  handleCityClick = (id) => {
    this.setState({ 
      clickCityId :id
    });
  }

  render() {
    return (
      <div>
        <div className="row">
            <CityList handleCityClick={this.handleCityClick}/>     
            <CityProfile props={this.state.props}
            handleCityClick={this.handleCityClick}
            clickCityId={this.state.clickCityId}/>
        </div>
      </div>
    )
  }
}
