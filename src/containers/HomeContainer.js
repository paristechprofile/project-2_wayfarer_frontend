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

    return (
      <div>
        <Carousel />
        <About />
      </div>
    );
  }
}