import React, { Component } from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <About/>
      </div>
    );
  }
}
