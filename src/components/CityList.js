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
////////////////////////
showCityDetails = () => {
  console.log("i am inside the functionn ");
    // console.log(post)
    
    // // send post to backend
    let  cityId="5c82e312232f2b049cfa6fa7";
  
    axios({
      method: "get",
      url:`http://localhost:3001/cities/${cityId}`,
      headers: { authorization: `Bearer ${localStorage.token}`},
    }).then(response => {
      console.log(response)
      console.log(`the city id is ${cityId}`)
      this.setState({
        post: response.data
      })
      // localStorage.token = response.data.signedJwt;
    }).catch(err => {
      console.log(err);
    });
  }
  //////////////////////////////////////




  // onClick={this.props.ShowCityDetails}
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
          <CityCard info={city} isLoggedIn={this.props.isLoggedIn} showCityDetails={this.showCityDetails}/>
        </div>
      )
    })
    return (
      <div>
        <div className="col m4">
          {showCities}
        </div>
      </div>
    )
  }
}
