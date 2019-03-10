import React, { Component } from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";

export default class HomeContainer extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    
    this.state = {
      props: this.props
    }
  }


  
  
  render() {
    console.log(`Inside render in home`)
    console.log(this.state.props);
    setTimeout(() => {
      this.state.props.history.push('/user/profile')
    }, 19000);
    
    return (
      <div>
        <Carousel />
        <About />
      </div>
    );
  }
}