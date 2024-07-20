import React from 'react';
import './Boardofdirectors.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Boardofdirectors = () => {
  return (
    <div className='boardofdirectors'>
      <Navbar />
      <Header 
        headingone='Here We Empower and Transform' 
        paragraphs='To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent.'
      />
      <div className="container">
        <div className="board-content">
        <div><Link to="/">
        <button  className="dark-blue-button" >Home</button>
      </Link> </div>
        
          <p>
            The Board of Directors of Nile Salvation College plays a pivotal role in guiding the institution towards its mission of academic excellence and holistic development. Led by Chairman Choldit Kiir Ngor and Secretary Dr. Emmanuel Ngordit Nyok, the board comprises esteemed members such as Joseph Thon Lang, Dr. Ngor Kiir Ngor, Deng Wien Kiir, Anil Abdalla, Mialual Nyok Deng, and Dr. Rumanzi Benita, who collectively bring a wealth of expertise and experience to the table. With a commitment to fostering innovation, integrity, and inclusivity, the board oversees strategic decision-making, ensures adherence to governance standards, and fosters a nurturing environment for students, faculty, and staff alike, thereby upholding Nile Salvation College's reputation as a beacon of learning and leadership.
          </p>
          <h3>Nile Salvation College Board of Directors</h3>
          <ol>
            <h3>Choldit Kiir Ngor - Chairman</h3>
            <h3>Profile</h3>
            <p>Choldit Kiir Ngor is the Founder and Director of Nile Salvation College of 
Science and Technology. He holds a Master of Public Health from Cavendish 
University of Uganda, a Postgraduate Diploma in Education from European 
International University Paris, a Bachelor of Science in Project Management 
from US, Atlantic International University, a Bachelor of Management 
Studies with a Specialization in Environmental Management from ISBM 
University India, Advanced Diploma in Project Management from IIMS 
India. Currently Pursuing a Postgraduate Diploma in Environmental 
Management from Nexus International University of Uganda.  Choldit has 
over 10 years of experience working with local and International 
organizations on humanitarian and developmental missions.  Choldit is 
passionate about instilling the Institute's core values in his students for them 
to save more lives and carry on transformational change. “Growth and transformation 
occur not by changing who we are, but as we summon the courage to be who we are.” – Katrina Kenison 
</p>
          </ol>
        </div>
      
          <Footer />
      </div>
    </div>
  );
}

export default Boardofdirectors;
