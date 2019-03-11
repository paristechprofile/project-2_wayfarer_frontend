import React, { Component } from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import HomePgArticles from "../components/HomePgArticles";

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