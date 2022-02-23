import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

const Slider = () => {
    const handlePayment = () => {
        console.log("" + "is working");
    };

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/image4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 className="first-header">GIVE A HAND</h1>
          <h1 className="second-header">MAKE THE WORLD A BETTER PLACE</h1>
            <h1 className="third-header"> Support the Causes you Care About</h1>
            <p className="text">Be the reason for the smiles of these beautiful people.</p>
            
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/image1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          <h1 className="first-header">GIVE A HAND</h1>
          <h1 className="second-header">MAKE THE WORLD A BETTER PLACE</h1>
            <h1 className="third-header"> Support the Causes you Care About</h1>
            <p className="text">Be the reason for the smiles of these beautiful people.</p>
            
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/image3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h1 className="first-header">GIVE A HAND</h1>
          <h1 className="second-header">MAKE THE WORLD A BETTER PLACE</h1>
            <h1 className="third-header"> Support the Causes you Care About</h1>
            <p className="text">Be the reason for the smiles of these beautiful people.</p>
            
        
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
