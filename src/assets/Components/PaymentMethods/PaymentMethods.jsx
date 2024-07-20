import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentMethods.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Title from '../Title/Title';

const PaymentMethods = () => {
  return (
    <div className="payment-methods container">
      <Navbar />
      <Header 
        headingone='Here We Empower and Transform' 
        paragraphs='To craft an atmosphere in which novel ideas, exploration, and transformative innovations would lead to addressing glitches that challenged the universe and let the world through talent.'
      />
      <div className="container">
        <div className="board-content">
          <div>
            <Link to="/">
              <button className="dark-blue-button">Home</button>
            </Link>
          </div>
          <Title title="Donate to Educate Us Initiative" />
          <p>Choose a payment method to support our cause:</p>
          <ol>
            <li>
              <h3>Mpesa</h3>
              <p>Pay via Mpesa using the following details:</p>
              <p><strong>Paybill:</strong> 247247</p>
              <p><strong>Account Number:</strong> 0725372528 </p>
            </li>
            <li>
              <h3>PayPal</h3>
              <p>Click the button below to donate via PayPal:</p>
              <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">
                Donate with PayPal
              </a>
            </li>
            {/* Add more payment methods as needed */}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentMethods;
