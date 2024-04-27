import React from 'react';
import './Programs.css';
import bachelor_degrees from '../../../assets/Bachelor.png'
import Diploma_degrees from '../../../assets/Diploma.png'
import Certificates from '../../../assets/graduation.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={bachelor_degrees} alt=''/>
            <div className="caption">
                <p>Bachelor Degree</p>
            </div>
        </div>   
        <div className="program">
            <img src={Diploma_degrees} alt=''/>
            <div className="caption">
                <p>Diploma</p>
            </div>
        </div>   
        <div className="program">
            <img src={Certificates} alt=''/>
            <div className="caption">
                <p>Certificate</p>
            </div>
        </div>      
    </div>
  );
}

export default Programs;
