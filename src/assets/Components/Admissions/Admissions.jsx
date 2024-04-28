import React from 'react';
import { Link } from 'react-router-dom';
import './Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions container">
      <h2>Admissions</h2>
      <p>
        Welcome to our admissions section. Here, you'll find information about our admission process and criteria.
      </p>
      <Link to="/nile/admission-criteria">
        <button>Explore More</button>
      </Link> {/* Wrap the button with Link component */}
    </div>
  );
}

export default Admissions;
