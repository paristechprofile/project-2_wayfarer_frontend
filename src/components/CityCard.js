// import React, { Component } from 'react'

// class CityCard extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       city: this.props.info,
//       clickCityId: ""
//     }
//   }



//   render () {
//     return (
//       <div className='city-preview'>
//         {/*i  took of the pictures  */}
// {/* info={this.state.city.id} */}
//         <img src={this.state.city.image} alt={this.state.city.name}  onClick={this.props.showCityDetails} className={this.state.city.name}image /> */}
//         <h3>{this.state.city.name}</h3>
//         <h3>{this.state.city.country}</h3>
//         {/* {this.props.isLoggedIn ? <h4>Age: {this.state.dog.age}</h4> : ''}
//         {this.props.isLoggedIn ? <h4>Walk Frequency: {this.state.dog.frequency}</h4> : ''} */}
//       </div>
//     )
//   }
// }

// export default CityCard

import React, { Component } from 'react'

class CityCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      city: this.props.info,
      id: ""
    }
  }


  handleCityClick = (e) => {
    e.preventDefault();
    let clickCityId = `${e.target.className}`;
    this.setState({ 
      id: clickCityId 
    });
}

  render () {
    console.log(this.state.id);
    return (
      <div className='city-preview'>
        {/*i  took of the pictures  */}

        <img 
        src={this.state.city.image} 
        alt={this.state.city.name} 
        name={this.state.city.name} 
        className={this.state.city._id}
        /> 
        <h3>{this.state.city.name}</h3>
        <h3>{this.state.city.country}</h3>
        <button 
        onClick={this.handleCityClick}  
        className={this.state.city._id}  
        name={this.state.city.name} 
        >
          Display City
        </button>
        {/* {this.props.isLoggedIn ? <h4>Age: {this.state.dog.age}</h4> : ''}
        {this.props.isLoggedIn ? <h4>Walk Frequency: {this.state.dog.frequency}</h4> : ''} */}
      </div>
    )
  }
}

export default CityCard