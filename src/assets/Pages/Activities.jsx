import React from 'react';
import './Activities.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Title from '../Components/Title/Title';

// Importing images
import kidsPhoto1 from '../../assets/education-under-kids.jpg';
import kidsPhoto2 from '../../assets/kids1.jpg';
import kidsPhoto3 from '../../assets/kids2.jpg';

import femaleResiliencePhoto1 from '../../assets/femaleresilience1.jpg';
import femaleResiliencePhoto2 from '../../assets/femaleresilience2.jpg';
import femaleResiliencePhoto3 from '../../assets/femaleresilience3.jpg';

// Uncomment and add English course photos when available
// import englishCoursePhoto1 from '../../assets/english-course-photo1.jpg';
// import englishCoursePhoto2 from '../../assets/english-course-photo2.jpg';
// import englishCoursePhoto3 from '../../assets/english-course-photo3.jpg';

const Activities = () => {
  return (
    <div className='activities'>
      <Navbar />
      <Header 
        headingone='Here We Empower and Transform' 
        paragraphs='To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent.'
      />
      <div className="container">
        <div className="board-content">
          <div>
            <Link to="/">
              <button className="dark-blue-button">Home</button>
            </Link>
          </div>
          <Title title="Get a glimpse of our activities "></Title>

          <div className="activity">
            <h2>Kids Mentorship and Talent Promoting Program</h2>
            <p>
              Our Kids Mentorship and Talent Promoting Program provides personalized guidance to help children discover and nurture their unique talents in a supportive environment.
            </p>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={kidsPhoto1} alt="Kids Activity 1" />
              </div>
              <div>
                <img src={kidsPhoto2} alt="Kids Activity 2" />
              </div>
              <div>
                <img src={kidsPhoto3} alt="Kids Activity 3" />
              </div>
            </Carousel>
          </div>

          <div className="activity">
            <h2>Female Resilience Action Education (Promote Equality)</h2>
            <p>
              Our Female Resilience Action Education initiative promotes gender equality by equipping women with the skills, knowledge, and confidence to overcome challenges and achieve their dreams.
            </p>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={femaleResiliencePhoto1} alt="Female Resilience 1" />
              </div>
              <div>
                <img src={femaleResiliencePhoto2} alt="Female Resilience 2" />
              </div>
              <div>
                <img src={femaleResiliencePhoto3} alt="Female Resilience 3" />
              </div>
            </Carousel>
          </div>

          <div className="activity">
            <h2>English Course Program</h2>
            <p>
              Our English Course Program offers comprehensive lessons designed to improve fluency, comprehension, and confidence in English, opening doors to new opportunities for learners.
            </p>
            {/* Uncomment and use this carousel when English course photos are available */}
            {/* <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={englishCoursePhoto1} alt="English Course 1" />
              </div>
              <div>
                <img src={englishCoursePhoto2} alt="English Course 2" />
              </div>
              <div>
                <img src={englishCoursePhoto3} alt="English Course 3" />
              </div>
            </Carousel> */}
          </div>
          
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Activities;
