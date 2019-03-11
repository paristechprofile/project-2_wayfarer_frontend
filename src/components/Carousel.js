import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css';
import slide1 from "./images/Hero-Carousel-Image.png";
import slide2 from "./images/dummy-sanfran-carousel.jpg";
import slide3 from "./images/dummy-dubai-carousel.jpg";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        className="carousel"
        infiniteLoop
        interval={2000}
        useKeyboardArrows
        autoPlay
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={slide1} alt='some value' />
        </div>
        <div>
          <img src={slide2} alt='some value'/>
        </div>
        <div>
          <img src={slide3} alt='some value'/>
        </div>
      </Carousel>
    );
  }
}