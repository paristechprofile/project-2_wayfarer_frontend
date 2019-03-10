import React, { Component } from 'react'
import CityList from '../components/CityList'
import CityProfile from '../components/CityProfile'

export default class CitiesContainer extends Component {
  constructor(props){
    super(props)
    console.log("///////this is the citiesContainer")


    this.state= {
      clickCityId: "",
      props: this.props
      // id: ""
    }
  }



  handleCityClick = (id) => {
    // console.log(`${e.target.className}`)
    // let clickCityId = `${e.target.className}`;
    console.log("there is my id in the handleCityclick func in citycontainer:  ")
    console.log(id)
    this.setState({ 
      clickCityId :id
    });
  }


  // ////////////this was working 
  // handleCityClick = () => {
  //   e.preventDefault();
  //   console.log(`${e.target.className}`)
  //   let clickCityId = `${e.target.className}`;
  //   this.setState({ 
  //     id: clickCityId 
  //   });
  // }
  /////////////

// axios.get(`http://localhost:3001/cities/${this.state.match.params.id}`)
//   .then((response) => {
//     console.log(response)
//     this.setState({
//       post: response.data.post
//     })
//     // localStorage.token = response.data.signedJwt;
//   }).catch(err => {
//     console.log(err);
//   });



  render() {
    // console.log(this.state.id)
    console.log(`there is my id inside the citycontainer`)
    console.log( this.state.clickCityId)
    return (
      <div>
        <h1>This is the Cities Container.</h1>
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
