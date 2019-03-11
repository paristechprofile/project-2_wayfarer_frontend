import React, { Component } from 'react'
import CityList from '../components/CityList'
import CityProfile from '../components/CityProfile'
import hero from '../components/images/Cities-Image.png'

class CitiesContainer extends Component {
  state= {
      clickCityId: "",
      props: this.props
    }


  handleCityClick = (id) => {
    this.setState({ 
      clickCityId :id
    });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row citiesList2">
          <div className="col citiesList3 s12">
            <img className='hero' src={hero} alt='some value' />
          </div>
        </div>
        <div className="row citiesList2">
          <div className="row citiesList2">
            <div className="col citiesList3 s3">
              <h5>CITIES</h5>
            </div>
            <div className="col citiesList3 s9">
              <h5>CITIES</h5>
            </div>
          </div>
          <div className="col citiesList3 s3"> 
            <CityList 
            handleCityClick={this.handleCityClick}/>     
          </div>
        <div className="col s9 cityProfile">
          <CityProfile props={this.state.props}
          handleCityClick={this.handleCityClick}
          clickCityId={this.state.clickCityId}/>
        </div>
        </div>
      </div>
    )
  }
}

export default CitiesContainer;