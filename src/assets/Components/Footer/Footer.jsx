import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Footer.css';
// Import your icons
import facebookIcon from '../../../assets/facebook.png';
import twitterIcon from '../../../assets/twitter.png';
import instagramIcon from '../../../assets/instagram.png';
import youtubeIcon from '../../../assets/youtube.png';
import white_arrow from '../../../assets/white-arrow.png'


const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div className='footer'>
      <p>© 2024 Educate Us Initiative. All Rights Reserved.</p>
      
      <ul>
        <h3>Quick Links</h3>
        <li><Link to='/activities'>Activities</Link></li><br></br>
        <button type='submit' className='btn donate'>
          <Link to='/payment-methods' className='donate-link'>
            Donate <img src={white_arrow} alt='arrow' />
          </Link>
        </button>
        <br/>
        <li><a href='https://www.facebook.com'><img src={facebookIcon} alt="Facebook" /></a></li>
        <li><a href='https://twitter.com'><img src={twitterIcon} alt="Twitter" /></a></li>
        <li><a href='https://www.instagram.com'><img src={instagramIcon} alt="Instagram" /></a></li>
        <li><a href='https://www.youtube.com'><img src={youtubeIcon} alt="Youtube" /></a></li>
      </ul>
    </div>
  );
};

export default Footer;
