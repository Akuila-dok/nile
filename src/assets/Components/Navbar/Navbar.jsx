import React, { useEffect, useState } from 'react'
import './Navbar.css'
import mylogo from '../../../assets/mylogo.png'
import menu_icon from '../../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY> 500 ? setSticky(true):setSticky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu]= useState(false);
  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'blue-nav':''}`}>
         <img src={mylogo} alt="logo" className='mylogo'></img>
      <ul className={mobileMenu? '': 'hide-mobile-menu'}>
        <li><Link to='header' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='admissions' smooth={true} offset={-260} duration={500}>Admissions</Link></li>
        <li><Link to='campuses' smooth={true} offset={-260} duration={500}>Campuses</Link></li>
        <li><Link to='alumni' smooth={true} offset={-260} duration={500}>Alumni</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt='menu icon' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
