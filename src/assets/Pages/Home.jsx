import React, { useEffect, useState } from 'react';
import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header';
import Title from '../Components/Title/Title';
import About from '../Components/About/About';
import Admissions from '../Components/Ouractivities/Ouractivities';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import dark_arrow from '../../assets/dark-arrow.png';
import Partnership from './Partnership';


const Home = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [ theme, setTheme] = useState(current_theme? current_theme: 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  }, [theme])


  return (
      <div className= {`Home ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Header headingone='Here We Empower and Transform' paragraphs='To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent.' buttonText='Explore More' buttonTo='programs' buttonOffset={-260} buttonDuration={500} buttonImage={dark_arrow}/>
        <div className="container">
          <Title title='Educate More Initiative' />
          <div className='programtext'>
          <p>
          The Educate More Initiative is dedicated to fostering an inclusive and
           empowering educational environment that transcends barriers of gender, 
           background, and location. Our aim is to create a society where every 
           individual has access to equal education and learning opportunities, 
           thus equipping them with the knowledge and skills necessary for personal 
           and community growth. Through our multifaceted programs, we strive to fight 
           gender-based inequality, promote sports activities, enhance academic performance, 
           support kids' mentorship, and elevate literacy within the community. </p><br></br>
          </div>
          <Title subTitle='Activities' title='Check out what we do!' />
          <Admissions />
          <About />
          <Title subTitle='Academic' title='Partnership' />
          <Partnership/>
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Title subTitle='Footer' title='Section' />
          <Footer />
        </div>
      </div>
  );
}

export default Home;
