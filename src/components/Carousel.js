import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "./images/dummy-dubai-carousel.jpg";
import slide2 from "./images/dummy-london.jpg";
import slide3 from "./images/dummy-sanfran-carousel.jpg";

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
        // style={carouselStyle}
      >
        <div>
          <img src={slide1} />
          <p className="legend">Dubai</p>
        </div>
        <div>
          <img src={slide2} />
          <p className="legend">London</p>
        </div>
        <div>
          <img src={slide3} />
          <p className="legend">San Francisco</p>
        </div>
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
