import React, { useState, useEffect } from 'react';
import './Header.css';
import dark_arrow from '../../../assets/dark-arrow.png';
import backIcon from '../../../assets/back-icon.png';
import nextIcon from '../../../assets/next-icon.png';

import image1 from '../../../assets/education-under-kids.jpg';
import image2 from '../../../assets/gender-equality.jpg';
import image3 from '../../../assets/footballplayers.jpg';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll

const Header = ({ headingone, paragraphs, buttonText, buttonTo, buttonOffset, buttonDuration, buttonImage }) => {
  // Background images for the slider
  const backgroundImages = [image1, image2, image3]; // Add your image paths here

  // State to keep track of the current background image index
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Function to handle changing background image
  const changeBackgroundImage = (index) => {
    setCurrentBackgroundIndex(index);
  };

  // Function to handle next slide
  const nextSlide = () => {
    const nextIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    setCurrentBackgroundIndex(nextIndex);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    const prevIndex = (currentBackgroundIndex - 1 + backgroundImages.length) % backgroundImages.length;
    setCurrentBackgroundIndex(prevIndex);
  };

  // Check if the button is provided
  const hasButton = buttonText && buttonTo && buttonOffset && buttonDuration && buttonImage;

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentBackgroundIndex]); // Dependency array to ensure effect runs when index changes

  return (
    <div className={`header container ${hasButton ? 'with-button' : ''}`} style={{backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`}}>
      <div className="header-text">
        <h1>{headingone}</h1>
        <p>{paragraphs}</p>
        {hasButton && (
          <button className='btn-header'>
            <ScrollLink to={buttonTo} smooth={true} offset={buttonOffset} duration={buttonDuration}>
              {buttonText}
              <img src={buttonImage} alt=''/>
            </ScrollLink> 
          </button>
        )}
      </div>
      {/* Dots for indicating the current slide */}
      <div className="slider-dots">
        {backgroundImages.map((image, index) => (
          <span key={index} className={`dot ${index === currentBackgroundIndex ? 'active' : ''}`} onClick={() => changeBackgroundImage(index)}></span>
        ))}
      </div>
      {/* Next and Previous Arrows */}
      <div className="slider-arrows">
        <img src={backIcon} alt="Previous" className="arrow prev" onClick={prevSlide} />
        <img src={nextIcon} alt="Next" className="arrow next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Header;
