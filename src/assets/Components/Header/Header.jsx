import React from 'react';
import './Header.css';
import dark_arrow from '../../../assets/dark-arrow.png';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll

const Header = () => {
  return (
    <div className='header container'> 
      <div className="header-text">
        <h1>Here we Empower and Transform</h1>
        <p>To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent</p>
        <button className='btn'>
          <ScrollLink to='programs' smooth={true} offset={-260} duration={500}>Explore More</ScrollLink> 
          <img src={dark_arrow} alt=''/>
        </button>
      </div>
    </div>
  );
};

export default Header;
