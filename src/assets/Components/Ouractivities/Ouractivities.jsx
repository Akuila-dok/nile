import React from 'react';
import { Link } from 'react-router-dom';
import './Ouractivities.css';

const Ouractivities= () => {
  return (
    <div className="ouractivities container">
      <h2>Activities</h2>
      <p>
      Join our diverse range of programs designed to empower and inspire! 
      Our Kids Mentorship and Talent Promoting Program provides personalized 
      guidance to help children discover and nurture their unique talents 
      in a supportive environment. Our Female Resilience Action Education 
      initiative promotes equality by equipping women with the skills, 
      knowledge, and confidence to overcome challenges and achieve their 
      dreams. Additionally, our English Course Program offers comprehensive 
      lessons for all levels, enhancing fluency and communication skills to open 
      doors to new opportunities. Be a part of our vibrant community and unlock your 
      potential today!
      </p>
      <Link to="/activities">
        <button>Explore More</button>
      </Link> {/* Wrap the button with Link component */}
    </div>
  );
}

export default Ouractivities;
