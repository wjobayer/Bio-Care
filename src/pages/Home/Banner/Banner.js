import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/Bio Care.png'
import bannerr from '../../../images/ban1.png'
import bannerrr from '../../../images/bb.png'
const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerr}
      alt="First slide"
    />
    {/* <Carousel.Caption>
    <h3 className="text-primary display-3">Provide Comprehensive HealthCare Survices</h3>
      <p className="text-primary">Your Health Our Care</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3 className="display-3">Provide Comprehensive HealthCare Survices</h3>
      <p>Your Health Our Care</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerrr}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
    <h3 className="text-primary display-3">Provide Comprehensive HealthCare Survices</h3>
      <p className="text-primary">Your Health Our Care</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;