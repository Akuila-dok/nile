import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Header from './assets/Components/Header/Header'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Admissions from './assets/Components/Admissions/Admissions'
import Contact from './assets/Components/Contact/Contact'
import Footer from './assets/Components/Footer/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="container">
      <Title subTitle='Our Program' title='What We Offer'/>
    <Programs/>
    <Title subTitle='Admission' title='check our admission criteria'/>
    <Admissions/>
    <About/>
    <Title subTitle='We have the following' title='Campuses'/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Title subTitle='Footer ' title='Section'/>
    <Footer/>
    </div>
    </div>
  )
}

export default App
