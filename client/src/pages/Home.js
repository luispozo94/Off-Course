import React, { useState } from 'react';
import '../styles/style.css';
import sliderImg from '../assets/images/homepage.jpeg';
import sliderImg2 from '../assets/images/homepage2.jpeg';
import sliderImg3 from '../assets/images/homepage3.jpeg';

const images = [sliderImg, sliderImg2, sliderImg3];

export default function Home() {
  // creating state variables
  // currentImage stores current [index] of poistion in images arr
  // setCurrentImage function to update currentImage
  // useState argument is the initial value for currentImage -> [0]
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      if (currentImage < length) {
        return currentImage + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="fullpage">
      <div className="intro">
        <div className="float">
          <h1>HAVE A FIELD DAY.</h1>
        </div>
        <div className="float_left">
          <p>SHOP NOW</p>
        </div>
      </div>
      <div className="image_container">
        <img
          className="image_slider"
          src={images[currentImage]}
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
}
