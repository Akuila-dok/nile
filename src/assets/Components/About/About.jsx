import React from 'react'
import './About.css'
import about_img from '../../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h2>NILE SALVATION COLLEGE</h2>
        <h2>Centre of Change and Innovation</h2>
        <p>
       <h2>MISSION</h2> 
        To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches
        that challenged the universe and let the world through talent</p>
      
        <p>
              <h2>VISION</h2>
            To expedient an excellent knowledge-sharing and communal accountability sector with extraordinary professionalism.
        To be a community-based anchor institution cultivating equity-minded social impact and global innovation.
        </p>
        <h2>VALUES</h2>
        <ol>
            <li>Knowledge that includes critical judgment.</li>
            <li>Transformation to promote personal growth.</li>
            <li>Purpose and passion as principles for decisions and actions; and Respect, integrity, and inclusiveness as attributes of morality and justice.</li>
            <li>Commitment to communities served.</li>
        </ol>
        <h2>ACADEMIC PHILILOSOPHY</h2> 
        <p>The Community college empowers its students to 
            become engaged citizens and lifelong learners,
        able to demonstrate the following 
        institutional learning outcomes:</p> 
        <ol>
            <li>Communicate effectively through writing, speaking, and creative expression</li>
            <li>Employ scientific and quantitative reasoning to engage in critical analysis and make evidence-based decisions</li>
            <li>Use established and emerging technologies to identify and apply information</li>
            <li>Recognize and consider a diversity of values and ethical beliefs; and</li>
            <li>Learn how to become actively engaged citizens in the communities they serve.</li>
        </ol>

        <h2>GENERAL OBJECTIVES</h2>
        <ol>
            <li>To Empower Generations through skills development </li>
            <li>To impart knowledge that ignite change through innovations</li>
            <li>To train infinite researchers to promote globalization </li>
            <li>To transform leaders of the generation to embrace technology   </li>

        </ol>
        
      </div>
    </div>
  )
}

export default About
