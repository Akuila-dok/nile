import React from 'react'
import './Header.css'
import dark_arrow from '../../../assets/dark-arrow.png'

const Header = () => {
  return (
    <div className='header container'> 
      <div className="header-text">
        <h1>Here we Empower and Transform</h1>
        <p>To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Header
