import React, { useEffect, useState } from 'react';
import './Navbar.css';
import mylogo from '../../../assets/mylogo.png';
import menu_icon from '../../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll'; // Alias the react-scroll Link as ScrollLink
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? 'blue-nav' : ''}`}>
      <img src={mylogo} alt="logo" className='mylogo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to='header' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='programs' smooth={true} offset={-260} duration={500}>Programs</ScrollLink></li>
        <li><Link to='/nile/admission-criteria' >Admissions</Link></li>
        <li><ScrollLink to='campuses' smooth={true} offset={-260} duration={500}>Campuses</ScrollLink></li>
        <li><ScrollLink to='alumni' smooth={true} offset={-260} duration={500}>Alumni</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt='menu icon' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
