import React from 'react';
import './Data.css'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const Data = () => {
   // Get the current date
  const currentDate = new Date();
  // Format the date as desired (e.g., YYYY-MM-DD)
  const formattedDate = currentDate.toISOString().slice(0, 10);

  return (
    <div className='data'>
        <Navbar/>
        <Header 
        headingone='Here We Empower and Transform' 
        paragraphs='To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent.'
      />
        <div className="container dataprivacy">

        <div><Link to="/nile">
        <button  className="dark-blue-button" >Home</button>
      </Link> </div>

        <h3>Privacy Policy</h3>
      <p>
       <h3>Last Updated: {formattedDate}. <br></br> <br></br></h3> 
      
     
        Nile Salvation College of Science and Technology ("Nile Salvation College," "we," "us," or "our") is committed to protecting the privacy of its students. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with Nile Salvation College as a student. By using our services, you consent to the practices described in this Privacy Policy.
      
      <h3>1. Information We Collect</h3>
      
        We collect various types of information from students to provide educational services effectively. This information includes but is not limited to:
        <ol>
          <li>Personal Information: Name, date of birth, address, email address, phone number, and other contact details.</li>
          <li>Academic Information: Courses, grades, transcripts, academic history, and enrollment status.</li>
          <li>Financial Information: Billing details, payment records, and financial aid information.</li>
          <li>Technical Information: IP address, browser type, device information, and usage data when accessing our online platforms.</li>
        </ol>
     
      <h3>2. How We Use Your Information</h3>
     
        We use the collected information for the following purposes:
        <ol>
          <li>Academic Administration: To manage your enrollment, academic progress, and provide support services.</li>
          <li>Communication: To communicate with you regarding academic matters, events, and important announcements.</li>
          <li>Billing and Financial Aid: To process payments, assess eligibility for financial aid, and manage student accounts.</li>
          <li>Improve Services: To analyze usage patterns, enhance educational offerings, and optimize our platforms.</li>
          <li>Compliance: To comply with legal obligations and enforce our policies.</li>
        </ol>
      
      <h3>3. Data Sharing and Disclosure</h3>
      
        We may share your information with the following parties:
        <ol>
          <li>Service Providers: Third-party service providers who assist us in delivering educational services, processing payments, or managing IT infrastructure.</li>
          <li>Educational Partners: Institutions or organizations collaborating with Nile Salvation College for academic programs or research.</li>
          <li>Legal Compliance: When required by law, regulatory authorities, or in response to valid legal requests.</li>
        </ol>
        We do not sell, rent, or lease your personal information to third parties for marketing purposes.
      
      <h3>4. Data Security</h3>
      
        Nile Salvation College employs appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet or storage system can be guaranteed as 100% secure.
      
      <h3>5. Your Rights</h3>
      
        As a student of Nile Salvation College, you have certain rights regarding your personal information, including:
        <ol>
          <li>Access: You can request access to your personal information held by Nile Salvation College.</li>
          <li>Correction: You have the right to correct any inaccuracies in your personal information.</li>
          <li>Deletion: You can request the deletion of your personal information under certain circumstances.</li>
          <li>Opt-Out: You can opt-out of receiving non-essential communications from Nile Salvation College.</li>
        </ol>
      
      <h3>6. Data Retention</h3>
      
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Afterward, we securely dispose of or anonymize your information.
      
      <h3>7. Changes to This Privacy Policy</h3>
      
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for any updates.
      
      <h3>8. Contact Us</h3>
      
        If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at [info@nilesalvationcollege.edu.ss].
     
        Thank you for entrusting Nile Salvation College with your education. We are committed to safeguarding your privacy and providing a secure learning environment.
      </p>

      <Footer/>
        </div>
      
    </div>
  );
};

export default Data;
