import React from 'react'
import './Admissioncriteria.css'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Title from '../Components/Title/Title'


const Admissioncriteria = () => {
  return (
    
    <div className='admission-criteria'> 
     <Navbar/>
     <Header/>
   
    <div className='container'>
      <div><Link to="/nile/Home">
        <button  className="dark-blue-button" >Home</button>
      </Link> {/* Wrap the button with Link component */}</div>
      <Title   subTitle='Admission ' title='Criteria' />
      <h3>Bachelor Degrees</h3>
      <p>BSc. Information Technology
Admission Requirements
Mean Grade: KCSE C+ and Grade C in English and Mathematics (or equivalent) Examination.<br/>

<br/>Year 1<br/>

<br/>Semester I<br/>

SZL 2111 HIV/AIDS<br/>
HRD 2101 Communication Skills<br/>
SMA 2104 Mathematics for Science<br/>
HBC2107 Introduction to Microeconomics<br/>
BIT 2102 Computer Systems and Organization<br/>
BIT 2103 Introduction to Computer Applications<br/>
BIT 2104 Introduction to Programming and Algorithm<br/>
BIT 2223 Installation and Customization<br/>
SPH 2172 Physics<br/>
<br/>Semester II<br/>

BIT 2123 Structured Programming<br/>
ICS 2202 Operating Systems I<br/>
HPS 2103 Financial Accounting<br/>
BIT 2108 Computer Networks<br/>
ICS 2104 Object‑Oriented Programming I<br/>
BIT 2111 Computer Aided Art and Design<br/>
BIT 2112 Systems Analysis and Design<br/>
ICS 2200 Electronic<br/>
<br/>Semester III<br/>

ICS 2206 Database Systems<br/>
HRD 2102 Development Studies<br/>
ICS 2211 Numerical Linear Algebra<br/>
BIT 2116 Network Design and Management<br/>
ICS 2203 Introduction to the Internet<br/>
ICS 2302 Software Engineering<br/>
ICS 2208 Operating Systems II<br/>
BIT 2118 Application Programming I<br/>
BIT 2121 Industrial Attachment<br/>
<br/>Year 2<br/>

<br/>Semester I<br/>

ICS 2201 Object Oriented Programming II<br/>
SMA 2101 Calculus I<br/>
HBC2125 Introduction to Macroeconomics<br/>
ICS 2205 Digital Logic<br/>
ICS 2105 Data Structures and Algorithms.<br/>
BIT 2214 Object-Oriented Systems and Design<br/>
BIT 2204 Network Systems Administration<br/>
BIT 2206 Application Programming II<br/>
<br/>Semester II<br/>

SMA 2102 Calculus II<br/>
BIT 2207 Internet Application programming<br/>
BIT 2208 Marketing Management<br/>
ICS 2404 Advanced Database Management Systems<br/>
SMA 2103 Probability and Statistics I<br/>
BIT 2212 Business System Modeling<br/>
ICS 2301 Design and Analysis of Algorithms<br/>
BIT 2203 Advanced Programming<br/>
<br/>Semester III<br/>

BIT 2215 Project Management<br/>
ICS 2311 Computer Graphics<br/>
ICS 2405 Knowledge Based Systems<br/>
BIT 2221 Computer Systems Project<br/>
BIT 23 01 Research Methodology<br/>
SMA 2230 Probability and Statistics II<br/>
BIT 2222 ICT and Society<br/>
ICS 2400 Transaction Processing Systems<br/>
<br/>Year 3<br/>

<br/>Semester I<br/>

BIT 2119 Management Information Systems<br/>
ICS 2305 Systems Programming<br/>
BIT 2303 Project (2 unit)<br/>
ICS 2307 Simulation and Modeling<br/>
BIT 2305 Human Computer Interface.<br/>
ICS 2403 Distributed Systems<br/>
BIT 2210 Business Information Strategy<br/>
BIT 2317 Fundamentals of Computer Security.<br/>
<br/>Semester II<br/>

BIT 2309 Principles and Practices of Management<br/>
BIT 2313 Professional Issues in Information Technology<br/>
ICS 2303 Multimedia Systems<br/>
BIT 2302 Industrial Management<br/>
BIT 2315 Electronic Commerce<br/>
BIT 2318 Information System Audit<br/>
BIT 2319 Artificial Intelligence<br/>
BIT 2316 Industrial Attachment</p>

<h3>Diploma</h3>

      
    <Footer/>
    </div>
    
    </div>
  )
}

export default Admissioncriteria
