import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../Components/Title/Title';
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';
import './Programpage.css'
const Programpage = () => {
  return (
    <div className='programpage'>
      <Navbar/>
      <Header headingone='Here We Empower and Transform' paragraphs='To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent.'/>

      <div className='container programspage'>
      <div><Link to="/nile">
        <button  className="dark-blue-button" >Home</button>
      </Link> {/* Wrap the button with Link component */}</div>
      <p>
      <Title subTitle='Our Program' title='What We Offer' /> 
      <h3>School of Business and Management Sciences</h3>
<ol>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Commerce in Purchasing & Supply Chain Management</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Logistics and Supply Chain Management)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Commerce in Project Management</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Project Management)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Commerce in Accounting</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Finance and Accounting)</Link>
  </li>
</ol>

<h3>School of Education and Institutional Studies</h3>
<ol start="1">
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Education in Early Childhood Education</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Early Childhood Development)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Public Service and Public Policy</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma Public Service and Public Policy)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Secretariat Service and Legal Studies</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Secretariat Service and Legal Studies)</Link>
  </li>
</ol>

<h3>School of Community Rehabilitation and Resilience</h3>
<ol>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Community Development</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Community Development)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Risk Planning and Disaster Management</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Risk Planning and Disaster Management)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Agribusiness and Farm Management</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Agribusiness and Farm Management)</Link>
  </li>
</ol>

<h3>School of Environment and Natural Resources Management</h3>
<ol>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Environmental Management</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma:Diploma in Environmental Management)</Link>
  </li>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Natural Resource Management</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Natural Resource Management)</Link>
  </li>
</ol>

<h3>School of Allied Health Sciences</h3>
<ol>
  <li>
    <Link to="/nile/admission-criteria">Bachelor of Public Health</Link><br></br>
    <Link to="/nile/admission-criteria">(Diploma: Diploma in Public Health)</Link>
  </li>
</ol>

<h3>School of Vocational and Professional Studies </h3>

<h3>Centre for Agriculture, Environment, and Water</h3>
<ol>
  <li><Link to="/nile/admission-criteria">Precision Agriculture Technologies</Link></li>
  <li><Link to="/nile/admission-criteria">Irrigation Methodologies</Link></li>
  <li><Link to="/nile/admission-criteria">Food Security and Post-Harvest Management</Link></li>
  <li><Link to="/nile/admission-criteria">Livestock Management</Link></li>
  <li><Link to="/nile/admission-criteria">Dairy Technologies</Link></li>
  <li><Link to="/nile/admission-criteria">Agribusiness and Farm Management</Link></li>
  <li><Link to="/nile/admission-criteria">Water Resources Management</Link></li>
  <li><Link to="/nile/admission-criteria">Aquaculture</Link></li>
  <li><Link to="/nile/admission-criteria">Environmental Management and Circular Economics</Link></li>
</ol>

<h3>Centre for Health Management</h3>
<ol>
  <li><Link to="/nile/admission-criteria">Health Systems Management</Link></li>
  <li><Link to="/nile/admission-criteria">Maternal and Child Healthcare</Link></li>
  <li><Link to="/nile/admission-criteria">Infection Prevention and Control (IPC)</Link></li>
  <li><Link to="/nile/admission-criteria">Medical Laboratory Management</Link></li>
  <li><Link to="/nile/admission-criteria">Medical Institution and Healthcare Organization</Link></li>
  <li><Link to="/nile/admission-criteria">Operations Management</Link></li>
  <li><Link to="/nile/admission-criteria">Preparedness and Response to Disasters and Emergencies – The Psychological Dimension</Link></li>
</ol>

<h3>Centre for Strategic Studies</h3>
<ol>
  <li><Link to="/nile/admission-criteria">Crime Prevention in the Digital Age</Link></li>
  <li><Link to="/nile/admission-criteria">Border Security</Link></li>
  <li><Link to="/nile/admission-criteria">National Security and Country Resilience</Link></li>
  <li><Link to="/nile/admission-criteria">Crisis and Disaster Management</Link></li>
  <li><Link to="/nile/admission-criteria">Diplomacy</Link></li>
</ol>

<h3>Centre for Higher Education</h3>
<ol>
  <li><Link to="/nile/admission-criteria">Financial Management for Higher Education</Link></li>
  <li><Link to="/nile/admission-criteria">Marketing of Higher Education Institutions</Link></li>
  <li><Link to="/nile/admission-criteria">Distance Learning: Recent and Future Trends</Link></li>
  <li><Link to="/nile/admission-criteria">Strategic Planning in Higher Education</Link></li>
</ol>

<h3>Centre for Transport and Maritime Studies</h3>
<ol>
  <li><Link to="/nile/admission-criteria">Transport-Planning, Development and Management</Link></li>
  <li><Link to="/nile/admission-criteria">Port Senior Management</Link></li>
  <li><Link to="/nile/admission-criteria">Maritime and Port Security</Link></li>
</ol>

<h3>Centre for Economic Development</h3>
<ol>
  <li><Link to="/nile/admission-criteria">Banking Innovation and Financial Strategies</Link></li>
  <li><Link to="/nile/admission-criteria">Tourism in the Post Covid 19 Era</Link></li>
  <li><Link to="/nile/admission-criteria">SME’s Key Strategies Innovation and Start Up</Link></li>
  <li><Link to="/nile/admission-criteria">Urban Economic Management</Link></li>
</ol>

<h3>Centre for Capacity Building</h3>
<ol>
  <li><Link to="/nile/admission-criteria">E-Government</Link></li>
  <li><Link to="/nile/admission-criteria">Project Management</Link></li>
  <li><Link to="/nile/admission-criteria">Human Resources Management</Link></li>
  <li><Link to="/nile/admission-criteria">Leadership</Link></li>
  <li><Link to="/nile/admission-criteria">Community Development</Link></li>
  <li><Link to="/nile/admission-criteria">Procurement & Supply Chain Management</Link></li>
  <li><Link to="/nile/admission-criteria">Leadership and Transformational Change</Link></li>
  <li><Link to="/nile/admission-criteria">Digital Skills</Link></li>
  <li><Link to="/nile/admission-criteria">Gender</Link></li>
</ol>



      </p>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Programpage
