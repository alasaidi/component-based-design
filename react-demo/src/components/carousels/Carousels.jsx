import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousels.css";

const Carousels = () => {
  return (
    <Carousel className="custom-carousel" indicators={true} controls={true}>
      <Carousel.Item key="slide1">
        <div className="slide-content">
          <h2>First slide</h2>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item key="slide2">
        <div className="slide-content">
          <h2>Second slide</h2>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item key="slide3">
        <div className="slide-content">
          <h2>Third slide</h2>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
