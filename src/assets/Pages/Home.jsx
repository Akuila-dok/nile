import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header';
import Programs from '../Components/Programs/Programs';
import Title from '../Components/Title/Title';
import About from '../Components/About/About';
import Admissions from '../Components/Admissions/Admissions';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
      <div className='Home'>
        <Navbar />
        <Header />
        <div className="container">
          <Title subTitle='Our Program' title='What We Offer' />
          <Programs />
          <Title subTitle='Admission' title='Check our admission criteria' />
          <Admissions />
          <About />
          <Title subTitle='We have the following' title='Campuses' />
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Title subTitle='Footer' title='Section' />
          <Footer />
        </div>
      </div>
  );
}

export default Home;
