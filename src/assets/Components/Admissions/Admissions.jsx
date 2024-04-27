import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions container">
      <h2>Admissions</h2>
      <p>
        Welcome to our admissions section. Here, you'll find information about our admission process and criteria.
      </p>
      <button onClick={() => window.location.href='/admission-criteria'}>Explore More</button>
    </div>
  );
}

export default Admissions;
