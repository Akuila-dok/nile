import React, { useEffect, useRef } from 'react';
import './About.css';
//import about_img from '../../../assets/nileabout.jpg';
//import mission_icon from '../../../assets/mission.png';
//import vision_icon from '../../../assets/vision.png';
//import values_icon from '../../../assets/values.png';



const About = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('bounce');
          // Remove the class after animation completes to allow re-triggering
          setTimeout(() => {
            entry.target.classList.remove('bounce');
          }, 2000); // Match this duration to your animation time
        }
      });
    }, options);

    paragraphsRef.current.forEach(p => {
      if (p) observer.observe(p);
    });

    return () => {
      if (paragraphsRef.current) {
        paragraphsRef.current.forEach(p => {
          if (p) observer.unobserve(p);
        });
      }
    };
  }, []);

  return (
    <div className='about'>
     
      <div className="about-right">
        <p ref={el => paragraphsRef.current[0] = el}>
          <i>
            <br/>
            <h2>MISSION</h2> 
            To transform and empower communities for access to education, 
            ensuring that every individual regardless of the background 
            status, gender, location, race has access to equal education 
            and learning opportunities.

          </i>
        </p>

        <p ref={el => paragraphsRef.current[1] = el}>
          <i>
            <h2>VISION</h2>
            To re-create a living society where an individual has 
            profitable knowledge and skills to benefit the society.

          </i>
        </p>

        <p ref={el => paragraphsRef.current[2] = el}>
          <i>
            <h2>OBJECTIVES</h2>
            <ol>
              <li>To fight against genders-based inequality.</li>
              <li>To promote sports activities.</li>
              <li>To improve learners performance in their academic studies.</li>
              <li>To promote kids mentorship programs.</li>
              <li>To promote literacy in the community.</li>
            </ol>
          </i>
        </p>
      </div>
    </div>
  );
};

export default About;
